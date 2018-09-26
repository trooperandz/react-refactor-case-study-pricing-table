
/**
 * Mock data structure for each pricing plan's included features
 * @returns {Object} An object containing each plan's included features
 */
function getPlanFeatures() {
  return {
    professional: [
      { featureSlug: 'revenue', value: 'N/A' },
      { featureSlug: 'subscribers', value: 1000 },
      { featureSlug: 'sites',  value: 1 },
      { featureSlug: 'seats',  value: 2 },
      { featureSlug: 'ecommerce-integrations', value: 'icon-x' },
      {
        featureSlug: 'shortcuts',
        value: [
          { featureSlug: 'grow-email-list' },
          { featureSlug: 'reduce-cart-abandonment' }
        ]
      },
      {
        featureSlug: 'discount-codes',
        value: [
          { featureSlug: 'discount-codes-multi' },
        ],
      },
      {
        featureSlug: 'message-center',
        value: [
          { featureSlug: 'auto-response-email' },
          { featureSlug: 'email-campaigns' },
        ],
      },
      {
        featureSlug: 'forms',
        value: [
          { featureSlug: 'pro-design-tools' },
          { featureSlug: 'templates-basic' },
          { featureSlug: 'visitor-targeting-basic' },
          { featureSlug: 'click-triggers' },
          { featureSlug: 'content-upgrades' },
        ],
      },
      { featureSlug: 'customer-success-management', value: 'icon-x' },
      { featureSlug: 'sumo-support-basic', value: 'Basic' },
      { featureSlug: 'remove-sumo-branding', value: 'icon-checkmark' },
      { featureSlug: 'email-integrations-basic', value: 'Basic' },
      { featureSlug: 'analytics-basic', value: 'Basic' },
      { featureSlug: 'ab-testing', value: 'icon-x' },
    ],
    ecommerce: [
      { featureSlug: 'revenue', value: 'Up to $50k' },
      { featureSlug: 'subscribers', value: 'Unlimited' },
      { featureSlug: 'sites', value: 3 },
      { featureSlug: 'seats', value: 10 },
      { featureSlug: 'ecommerce-integrations', value: 'icon-checkmark' },
      {
        featureSlug: 'shortcuts',
        value: [
          { featureSlug: 'grow-email-list' },
          { featureSlug: 'reduce-cart-abandonment' },
          { featureSlug: 'average-order-value' },
          { featureSlug: 'covert-window-shopper' },
        ]
      },
      {
        featureSlug: 'discount-codes',
        value: [
          { featureSlug: 'discount-codes-multi' },
          { featureSlug: 'discount-codes-unique' },
        ],
      },
      {
        featureSlug: 'message-center',
        value: [
          { featureSlug: 'auto-response-email' },
          { featureSlug: 'email-campaigns' },
          { featureSlug: 'push-notifications' },
          { featureSlug: 'chat' },
        ],
      },
      {
        featureSlug: 'forms',
        value: [
          { featureSlug: 'pro-design-tools' },
          { featureSlug: 'templates-ecommerce' },
          { featureSlug: 'visitor-targeting-pro' },
          { featureSlug: 'click-triggers' },
          { featureSlug: 'content-upgrades' },
          { featureSlug: 'cart-casino' },
        ],
      },
      { featureSlug: 'customer-success-management', value: 'icon-x' },
      { featureSlug: 'sumo-support-basic', value: 'Basic' },
      { featureSlug: 'remove-sumo-branding', value: 'icon-checkmark' },
      { featureSlug: 'email-integrations-pro', value: 'Pro' },
      { featureSlug: 'analytics-pro', value: 'Pro' },
      { featureSlug: 'ab-testing', value: 'icon-checkmark' },
    ],
    growth: [
      { featureSlug: 'revenue', value: 'Unlimited' },
      { featureSlug: 'subscribers', value: 'Unlimited' },
      { featureSlug: 'sites', value: 'Unlimited' },
      { featureSlug: 'seats', value: 'Unlimited' },
      { featureSlug: 'ecommerce-integrations', value: 'icon-checkmark' },
      {
        featureSlug: 'shortcuts',
        value: [
          { featureSlug: 'grow-email-list' },
          { featureSlug: 'reduce-cart-abandonment' },
          { featureSlug: 'average-order-value' },
          { featureSlug: 'covert-window-shopper' },
        ]
      },
      {
        featureSlug: 'discount-codes',
        value: [
          { featureSlug: 'discount-codes-multi' },
          { featureSlug: 'discount-codes-unique' },
        ],
      },
      {
        featureSlug: 'message-center',
        value: [
          { featureSlug: 'auto-response-email' },
          { featureSlug: 'email-campaigns' },
          { featureSlug: 'push-notifications' },
          { featureSlug: 'chat' },
        ],
      },
      {
        featureSlug: 'forms',
        value: [
          { featureSlug: 'pro-design-tools' },
          { featureSlug: 'templates-ecommerce' },
          { featureSlug: 'visitor-targeting-pro' },
          { featureSlug: 'click-triggers' },
          { featureSlug: 'content-upgrades' },
          { featureSlug: 'cart-casino' },
        ],
      },
      { featureSlug: 'customer-success-management', value: 'icon-checkmark' },
      { featureSlug: 'sumo-support-pro', value: 'VIP' },
      { featureSlug: 'remove-sumo-branding', value: 'icon-checkmark' },
      { featureSlug: 'email-integrations-pro', value: 'Pro' },
      { featureSlug: 'analytics-pro', value: 'Pro' },
      { featureSlug: 'ab-testing', value: 'icon-checkmark' },
    ],
  };
}

/**
 * Get the feature titles (used for both category titles and feature titles)
 * and descriptions (used for tooltips) for each feature slug.
 * @param {string} featureSlug The slug used to identify correct feature details
 * @param {string/integer} value Used to determine specific tooltip descriptions
 * @returns {Object} An object containing the feature title and description
 */
function getFeatureDetails(featureSlug, value = '') {
  let featureTitle;
  let featureDescription;

  switch(featureSlug) {
    case 'revenue':
      featureTitle = 'Revenue';
      featureDescription = `Use Sumo to help you generate ${value} revenue.`;
      break;
    case 'subscribers':
      featureTitle = 'Subscribers';
      featureDescription = `Send ${value} emails and browser notifications.`;
      break;
    case 'sites':
      featureTitle = 'Sites';
      featureDescription = `Use your pro features ${value}.`;
      break;
    case 'seats':
      let seatsDescription;
      featureTitle = 'Seats';

      if (value == 1) {
        featureDescription = 'Use a single seat to manage Sumo.';
      } else if (value === 5)  {
        featureDescription = 'Have up to five seats managing Sumo.';
      } else if (value === 10) {
        featureDescription = 'Have up to ten seats managing Sumo.';
      } else {
        featureDescription = 'Add as many seats as you need to manage Sumo.';
      }

      break;
    case 'ecommerce-integrations':
      featureTitle = 'Shopify & Woocommerce Integrations';
      featureDescription = `Automatically export new subscribers to ${value}`;
      break;
    case 'shortcuts':
      featureTitle = 'Shortcuts';
      featureDescription = '';
      break;
    case 'grow-email-list':
      featureTitle = 'Grow Email List';
      featureDescription = 'TBD';
      break;
    case 'reduce-cart-abandonment':
      featureTitle = 'Reduce Cart Abandonment';
      featureDescription = 'TBD';
      break;
    case 'average-order-value':
      featureTitle = 'Increase Average Order Value';
      featureDescription = 'TBD';
      break;
    case 'covert-window-shopper':
      featureTitle = 'Convert Window Shoppers';
      featureDescription = 'TBD';
      break;
    case 'discount-codes':
      featureTitle = 'Discount Codes';
      featureDescription = '';
      break;
    case 'discount-codes-multi':
      featureTitle = 'Multi-use Discount Codes';
      featureDescription = 'TBD';
      break;
    case 'discount-codes-unique':
      featureTitle = 'Unique Discount Codes';
      featureDescription = 'TBD';
      break;
    case 'message-center':
      featureTitle = 'Message Center';
      featureDescription = '';
      break;
    case 'auto-response-email':
      featureTitle = 'Autoresponder Email';
      featureDescription = 'Greet new subscribers with an automated welcome email.';
      break;
    // TODO: altered the description a bit
    case 'email-campaigns':
      featureTitle = 'Email Campaign';
      featureDescription = 'Send targeted email messages to your subscribers. See detailed stats to find out how your campaigns are performing.';
      break;
    // TODO: altered the description (cut some content out)
    case 'push-notifications':
      featureTitle = 'Browser Push Notifications';
      featureDescription = 'Send push notifications straight to your subscribers\' browser or phone.';
      break;
    // TODO: altered the description (cut some content out)
    case 'chat':
      featureTitle = 'Chat';
      featureDescription = 'Collect even more subscribers and respond to your visitors in real time.';
      break;
    case 'forms':
      featureTitle = 'Forms Features';
      featureDescription = '';
      break;
    case 'pro-design-tools':
      featureTitle = 'Pro Design Tools';
      featureDescription = 'Use our powerful design editor to customize your forms to match every aspect of your brand.';
      break;
    case 'templates-basic':
      featureTitle = 'Basic Templates';
      featureDescription = 'Save yourself hours using pre-built templates. Set them live right out of the box or customize to match your branding.';
      break;
    // TODO: altered the description (cut some content out)
    case 'templates-ecommerce':
      featureTitle = 'Ecommerce Templates';
      featureDescription = 'Save yourself hours using pre-built templates designed specifically for ecommerce sites.';
      break;
    case 'visitor-targeting-basic':
      featureTitle = 'Basic Visitor Targeting';
      featureDescription = 'Customize how you want your forms displayed on your website. You can target by URLs, device type, articles, and more!';
      break;
    case 'visitor-targeting-pro':
      featureTitle = 'Pro Visitor Targeting';
      featureDescription = 'Customize how you want your forms displayed on your website. You can target by URLs, device type, visitor location, date ranges, cookies, referrers, and more!';
      break;
    case 'click-triggers':
      featureTitle = 'Click Triggers';
      featureDescription = 'Turn any button, image or text on your website into a trigger that displays a popup form upon click. Click triggers have higher conversion rates and are prefered by visitors.';
      break;
    case 'content-upgrades':
      featureTitle = 'Content Upgrades';
      featureDescription = 'Upload bonus content and send it automatically to subscribers. Entice visitors to join your list by providing them with great content like ebooks, videos, and more.';
      break;
    case 'cart-casino':
      featureTitle = 'Cart Casino Forms';
      featureDescription = 'Increase conversion rates by offering visitors a chance to win prizes like discount codes when they subscribe to your mailing list.';
      break;
    // TODO: need description
    case 'customer-success-management':
      featureTitle = 'Customer Success Management';
      featureDescription = '';
      break;
    case 'sumo-support-basic':
      featureTitle = 'Basic';
      featureDescription = 'Receive in-app and email support from our dedicated Support team.';
      break;
    case 'sumo-support-pro':
      featureTitle = 'Pro';
      featureDescription = 'Receive priority in-app and email support from our dedicated Support and Success teams.';
      break;
    case 'remove-sumo-branding':
      featureTitle = 'Remove Sumo Branding';
      featureDescription = 'Remove the Sumo branding from your forms and emails.';
      break;
    case 'email-integrations-basic':
      featureTitle = 'Basic';
      featureDescription = 'Automatically export new subscribers to standard email providers like Mailchimp, Aweber, Constant Contact, Campaign Monitor, Emma, Mad Mimi, Feedblitz, Zapier, MNB, and more.';
      break;
    case 'email-integrations-pro':
      featureTitle = 'Pro';
      featureDescription = 'Automatically export new subscribers to all standard email providers plus premium email providers like InfusionSoft, Klaviyo, Hubspot, Sailthru, Pardot, Ontraport, Salesforce, and more.';
      break;
    case 'analytics-basic':
      featureTitle = 'Basic';
      featureDescription = 'Learn how your forms and website have performed in the last 7 days. Get simple, actionable insights to take the next step.';
      break;
    case 'analytics-pro':
      featureTitle = 'Pro';
      featureDescription = 'Learn how your forms and website have performed using historical data, trends, and industry standards. Get simple, actionable insights to take the next step.';
      break;
    case 'ab-testing':
      featureTitle = 'A/B Tests';
      featureDescription = 'Increase conversions by testing designs and settings against each other.';
      break;
    default:
      featureTitle = '';
      featureDescription = '';
      break;
  }

  return {
    featureTitle,
    featureDescription,
  };
}

export default {
  getPlanFeatures,
  getFeatureDetails,
};