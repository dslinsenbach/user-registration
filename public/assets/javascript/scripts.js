// Define constants for API route locations

const API_URL_REGISTER = '/api/v1/register';
const API_URL_ADMIN_USERS = '/api/v1/admin/users';
const API_URL_ADMIN_USER_DETAILS = '/api/v1/admin/users/';

// Serialize form data to JSON object
$(() => {
  $.fn.serializeObject = function () {
    const self = this;
    let json = {};
    const pushCounters = {};
    const patterns = {
      validate: /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
      key: /[a-zA-Z0-9_]+|(?=\[\])/g,
      push: /^$/,
      fixed: /^\d+$/,
      named: /^[a-zA-Z0-9_]+$/,
    };

    this.build = function (base, key, value) {
      base[key] = value;
      return base;
    };

    this.push_counter = function (key) {
      if (pushCounters[key] === undefined) {
        pushCounters[key] = 0;
      }
      return pushCounters[key]++;
    };

    $.each($(this).serializeArray(), function () {
      // Skip invalid keys
      if (!patterns.validate.test(this.name)) {
        return;
      }

      let k;
      const keys = this.name.match(patterns.key);
      let merge = this.value;
      let reverseKey = this.name;

      while ((k = keys.pop()) !== undefined) {
        // Adjust reverse_key
        reverseKey = reverseKey.replace(new RegExp(`\\[${k}\\]$`), '');

        // Push
        if (k.match(patterns.push)) {
          merge = self.build([], self.push_counter(reverseKey), merge);
        }

        // Fixed
        else if (k.match(patterns.fixed)) {
          merge = self.build([], k, merge);
        }

        // Named
        else if (k.match(patterns.named)) {
          merge = self.build({}, k, merge);
        }
      }

      json = $.extend(true, json, merge);
    });

    return json;
  };
});

function formatDate(raw, dateStyle, timeStyle) {
  const d = new Date(raw);

  const options = {
    dateStyle,
    timeStyle,
  };

  return d.toLocaleString('en-US', options);
}

function clearErrors() {
  $('form .error').text('');
  $('form .error').hide();
}

function showError(form, message) {
  form.find('.error').text(message);
  form.find('.error').show();
}

function submitForm(form, method, url, cb) {
  clearErrors();

  const data = JSON.stringify(form.serializeObject());

  const options = {
    type: method,
    url,
    data,
    contentType: 'application/json',
  };

  $.ajax(options)
    .done((resp) => {
      cb(resp);
    })
    .fail((error) => {
      showError(form, error.responseJSON ? error.responseJSON.message : 'An unknown error occurred.');
    });
}
