
// Mock data structure for all pricing plan data
function getPlanFeatures() {
  return {
    professional: [
      { featureSlug: 'revenue', featureTitle: 'Revenue', value: 'N/A' },
      { featureSlug: 'subscribers', featureTitle: 'Subscribers', value: 1000 },
      { featureSlug: 'sites', featureTitle: 'Sites', value: 1 },
      { featureSlug: 'seats', featureTitle: 'Seats', value: 2 },
      { featureSlug: 'ecommerce-integrations', featureTitle: 'Shopify & Woocommerce Integrations', value: 'icon-x' },
      { featureSlug: 'discount-codes', featureTitle: 'Discount Codes', value: 'icon-x' },
      {
        featureSlug: 'message-center',
        featureTitle: 'Message Center',
        value: [
          'Auto Response Email',
          'Email Campaign',
          'Browser Push Notification',
        ],
      },
      {
        featureSlug: 'forms',
        featureTitle: 'Forms Features',
        value: [
          'Pro Design Tools',
          'Basic Templates',
          'Basic Visitor Targeting',
          'Click Triggers',
          'Content Upgrades',
        ],
      },
      { featureSlug: 'remove-sumo-branding', featureTitle: 'Remove Sumo Branding', value: 'icon-checkmark' },
      { featureSlug: 'sumo-support', featureTitle: 'Sumo Support', value: 'Basic' },
      { featureSlug: 'email-integrations', featureTitle: 'Email Integrations', value: 'Basic' },
      { featureSlug: 'analytics', featureTitle: 'Analytics', value: 'Pro' },
      { featureSlug: 'ab-tests', featureTitle: 'A/B Tests', value: 'icon-checkmark' },
    ],
    ecommerce: [
      { featureSlug: 'revenue', featureTitle: 'Revenue', value: 'Up to $50k' },
      { featureSlug: 'subscribers', featureTitle: 'Subscribers', value: 'Unlimited' },
      { featureSlug: 'sites', featureTitle: 'Sites', value: 3 },
      { featureSlug: 'seats', featureTitle: 'Seats', value: 10 },
      { featureSlug: 'ecommerce-integrations', featureTitle: 'Shopify & Woocommerce Integrations', value: 'icon-checkmark' },
      { featureSlug: 'discount-codes', featureTitle: 'Discount Codes', value: 'icon-checkmark' },
      {
        featureSlug: 'message-center',
        featureTitle: 'Message Center',
        value: [
          'Auto Response Email',
          'Email Campaign',
          'Browser Push Notification',
          'Chat',
        ],
      },
      {
        featureSlug: 'forms',
        featureTitle: 'Forms Features',
        value: [
          'Pro Design Tools',
          'Basic Templates',
          'Basic Visitor Targeting',
          'Click Triggers',
          'Content Upgrades',
          'Cart Casino Forms',
        ],
      },
      { featureSlug: 'remove-sumo-branding', featureTitle: 'Remove Sumo Branding', value: 'icon-checkmark' },
      { featureSlug: 'sumo-support', featureTitle: 'Sumo Support', value: 'Basic' },
      { featureSlug: 'email-integrations', featureTitle: 'Email Integrations', value: 'Pro' },
      { featureSlug: 'analytics', featureTitle: 'Analytics', value: 'Pro' },
      { featureSlug: 'ab-tests', featureTitle: 'A/B Tests', value: 'icon-checkmark' },
    ],
    growth: [
      { featureSlug: 'revenue', featureTitle: 'Revenue', value: 'Unlimited' },
      { featureSlug: 'subscribers', featureTitle: 'Subscribers', value: 'Unlimited' },
      { featureSlug: 'sites', featureTitle: 'Sites', value: 'Unlimited' },
      { featureSlug: 'seats', featureTitle: 'Seats', value: 'Unlimited' },
      { featureSlug: 'ecommerce-integrations', featureTitle: 'Shopify & Woocommerce Integrations', value: 'icon-checkmark' },
      { featureSlug: 'discount-codes', featureTitle: 'Discount Codes', value: 'icon-checkmark' },
      {
        featureSlug: 'message-center',
        featureTitle: 'Message Center',
        value: [
          'Auto Response Email',
          'Email Campaign',
          'Browser Push Notification',
          'Chat',
        ],
      },
      {
        featureSlug: 'forms',
        featureTitle: 'Forms Features',
        value: [
          'Pro Design Tools',
          'Basic Templates',
          'Basic Visitor Targeting',
          'Click Triggers',
          'Content Upgrades',
          'Cart Casino Forms',
        ],
      },
      { featureSlug: 'remove-sumo-branding', featureTitle: 'Remove Sumo Branding', value: 'icon-checkmark' },
      { featureSlug: 'sumo-support', featureTitle: 'Sumo Support', value: 'Pro' },
      { featureSlug: 'email-integrations', featureTitle: 'Email Integrations', value: 'Pro' },
      { featureSlug: 'analytics', featureTitle: 'Analytics', value: 'Pro' },
      { featureSlug: 'ab-tests', featureTitle: 'A/B Tests', value: 'icon-checkmark' },
    ],
  };
};

export default {
  getPlanFeatures
};