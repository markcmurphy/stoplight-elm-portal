import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { StoplightProject } from '@stoplight/elements-dev-portal';
import { useState } from 'react';

export default function Home() {
  const [tags, setTags] = useState([]);

  function ListItem(props) {
    return (
      <li>
        <Link href={`/tags/${props.value}`}>
          <a>{props.value}</a>
        </Link>
      </li>
    );
  }

  function NumberList(props) {
    const titles = props.titles;
    let titlesArr = [];

    function printAllVals(obj) {
      for (let k in obj) {
        if (typeof obj[k] === 'object') {
          printAllVals(obj[k]);
        } else {
          k == 'title' ? titlesArr.push(obj[k]) : null;
        }
      }
      return titlesArr;
    }

    function removeDupes(array) {
      return array.filter((value, index) => array.indexOf(value) === index);
    }

    const listItems = removeDupes(printAllVals(titles)).map((title) => (
      <ListItem key={title.index} value={title} />
    ));

    return <ul>{listItems}</ul>;
  }

  const items = [
    {
      title: 'api-docs',
    },
    {
      title: 'apps',
      items: [
        {
          id: 'ZG9jOjEyNDYxNzY',
          title: 'BigCommerce Apps Quick Start Tutorial',
          type: 'article',
          slug: 'ZG9jOjEyNDYxNzY-big-commerce-apps-quick-start-tutorial',
          meta: '',
        },
        {
          id: 'ZG9jOjEyNDYxNzc',
          title: 'Building Apps',
          type: 'article',
          slug: 'ZG9jOjEyNDYxNzc-building-apps',
          meta: '',
        },
        {
          title: 'guide',
          items: [
            {
              id: 'ZG9jOjEyNDcxNzY',
              title: 'Introduction to Building Apps',
              type: 'article',
              slug: 'ZG9jOjEyNDcxNzY-introduction-to-building-apps',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxNzc',
              title: 'Types of Apps',
              type: 'article',
              slug: 'ZG9jOjEyNDcxNzc-types-of-apps',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxNzg',
              title: 'Beginning App Development',
              type: 'article',
              slug: 'ZG9jOjEyNDcxNzg-beginning-app-development',
              meta: '',
            },
            {
              id: 'ZG9jOjM4MzMzNzM',
              title: 'Managing Apps in the Developer Portal',
              type: 'article',
              slug: 'ZG9jOjM4MzMzNzM-managing-apps-in-the-developer-portal',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxODA',
              title: 'Single-Click App OAuth Flow',
              type: 'article',
              slug: 'ZG9jOjEyNDcxODA-single-click-app-o-auth-flow',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxODE',
              title: 'Single-Click App Callbacks',
              type: 'article',
              slug: 'ZG9jOjEyNDcxODE-single-click-app-callbacks',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxODI',
              title: 'Supporting Multiple Users',
              type: 'article',
              slug: 'ZG9jOjEyNDcxODI-supporting-multiple-users',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxODM',
              title: 'Listening for Events',
              type: 'article',
              slug: 'ZG9jOjEyNDcxODM-listening-for-events',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxODQ',
              title: "Designing a Single-Click App's UI",
              type: 'article',
              slug: 'ZG9jOjEyNDcxODQ-designing-a-single-click-app-s-ui',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxODU',
              title: 'Creating an External Installation Button',
              type: 'article',
              slug: 'ZG9jOjEyNDcxODU-creating-an-external-installation-button',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxODY',
              title: 'App Development Best Practices',
              type: 'article',
              slug: 'ZG9jOjEyNDcxODY-app-development-best-practices',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxODc',
              title: 'App Store Approval Requirements',
              type: 'article',
              slug: 'ZG9jOjEyNDcxODc-app-store-approval-requirements',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxODg',
              title: 'Publishing an App',
              type: 'article',
              slug: 'ZG9jOjEyNDcxODg-publishing-an-app',
              meta: '',
            },
          ],
        },
        {
          title: 'tutorials',
          items: [
            {
              id: 'ZG9jOjEyNDcxODk',
              title: "Find an App's ID",
              type: 'article',
              slug: 'ZG9jOjEyNDcxODk-find-an-app-s-id',
              meta: '',
            },
            {
              id: 'ZG9jOjEyNDcxOTA',
              title: 'Building an App with Laravel and React',
              type: 'article',
              slug: 'ZG9jOjEyNDcxOTA-building-an-app-with-laravel-and-react',
              meta: '',
            },
          ],
        },
      ],
    },
    {
      title: 'cart-and-checkout',
      items: [
        {
          id: 'ZG9jOjIyMDU4Nw',
          title: 'Add to Cart URLs',
          type: 'article',
          slug: 'ZG9jOjIyMDU4Nw-add-to-cart-ur-ls',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU4OA',
          title: 'Cart and Checkout',
          type: 'article',
          slug: 'ZG9jOjIyMDU4OA-cart-and-checkout',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU4OQ',
          title: 'Channels, Sites and Routes APIs',
          type: 'article',
          slug: 'ZG9jOjIyMDU4OQ-channels-sites-and-routes-ap-is',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU5MA',
          title: 'Checkout SDK',
          type: 'article',
          slug: 'ZG9jOjIyMDU5MA-checkout-sdk',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU5MQ',
          title: 'Embedded Checkout Overview',
          type: 'article',
          slug: 'ZG9jOjIyMDU5MQ-embedded-checkout-overview',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU5Mg',
          title: 'Embedded Checkout',
          type: 'article',
          slug: 'ZG9jOjIyMDU5Mg-embedded-checkout',
          meta: '',
        },
        {
          id: 'ZG9jOjEyNDYxODQ',
          title: 'Installing a Custom Checkout',
          type: 'article',
          slug: 'ZG9jOjEyNDYxODQ-installing-a-custom-checkout',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU5Mw',
          title: 'Working with the Storefront Cart and Checkout APIs',
          type: 'article',
          slug:
            'ZG9jOjIyMDU5Mw-working-with-the-storefront-cart-and-checkout-ap-is',
          meta: '',
        },
      ],
    },
    {
      title: 'catalog',
      items: [
        {
          title: 'currencies',
          items: [
            {
              id: 'ZG9jOjIyMDcyOA',
              title: 'Currencies Overview',
              type: 'article',
              slug: 'ZG9jOjIyMDcyOA-currencies-overview',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDcyOQ',
              title: 'How Currencies Work',
              type: 'article',
              slug: 'ZG9jOjIyMDcyOQ-how-currencies-work',
              meta: '',
            },
          ],
        },
        {
          id: 'ZG9jOjIyMDU5NA',
          title: 'Price List API',
          type: 'article',
          slug: 'ZG9jOjIyMDU5NA-price-list-api',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU5NQ',
          title: 'Price Order of Operations',
          type: 'article',
          slug: 'ZG9jOjIyMDU5NQ-price-order-of-operations',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU5Ng',
          title: 'Catalog Overview',
          type: 'article',
          slug: 'ZG9jOjIyMDU5Ng-catalog-overview',
          meta: '',
        },
      ],
    },
    {
      title: 'channels',
      items: [
        {
          id: 'ZG9jOjIyMDU5Nw',
          title: 'Building Channel Apps',
          type: 'article',
          slug: 'ZG9jOjIyMDU5Nw-building-channel-apps',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU5OA',
          title: 'Channel App Best Practices',
          type: 'article',
          slug: 'ZG9jOjIyMDU5OA-channel-app-best-practices',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDU5OQ',
          title: 'Channel App Requirements',
          type: 'article',
          slug: 'ZG9jOjIyMDU5OQ-channel-app-requirements',
          meta: '',
        },
        {
          id: 'ZG9jOjM2MzU0MQ',
          title: 'Extending Sales Channel Apps with Channels Toolkit',
          type: 'article',
          slug:
            'ZG9jOjM2MzU0MQ-extending-sales-channel-apps-with-channels-toolkit',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYwMA',
          title: 'BigCommerce Channels Overview',
          type: 'article',
          slug: 'ZG9jOjIyMDYwMA-big-commerce-channels-overview',
          meta: '',
        },
        {
          id: 'ZG9jOjM4MzMyMjg',
          title: 'Building Point-of-Sale Channels',
          type: 'article',
          slug: 'ZG9jOjM4MzMyMjg-building-point-of-sale-channels',
          meta: '',
        },
        {
          id: 'ZG9jOjE5NjMyODU',
          title: 'Building Channels Quick Start',
          type: 'article',
          slug: 'ZG9jOjE5NjMyODU-building-channels-quick-start',
          meta: '',
        },
        {
          id: 'ZG9jOjM4MzMyMzA',
          title: 'Building Storefront Channels',
          type: 'article',
          slug: 'ZG9jOjM4MzMyMzA-building-storefront-channels',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYwMQ',
          title: 'Channels Toolkit Reference',
          type: 'article',
          slug: 'ZG9jOjIyMDYwMQ-channels-toolkit-reference',
          meta: '',
        },
      ],
    },
    {
      title: 'customers',
      items: [
        {
          id: 'ZG9jOjIyMDYwMg',
          title: 'Current customer API',
          type: 'article',
          slug: 'ZG9jOjIyMDYwMg-current-customer-api',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYwMw',
          title: 'Customer Login API',
          type: 'article',
          slug: 'ZG9jOjIyMDYwMw-customer-login-api',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYwNA',
          title: 'Customers and Subscribers',
          type: 'article',
          slug: 'ZG9jOjIyMDYwNA-customers-and-subscribers',
          meta: '',
        },
        {
          id: 'ZG9jOjI0NTk3OA',
          title: 'Passwordless Customer Login',
          type: 'article',
          slug: 'ZG9jOjI0NTk3OA-passwordless-customer-login',
          meta: '',
        },
      ],
    },
    {
      id: 'ZG9jOjIyMDAzNQ',
      title: 'Developers Guide to Headless Commerce',
      type: 'article',
      slug: 'ZG9jOjIyMDAzNQ-developers-guide-to-headless-commerce',
      meta: '',
    },
    {
      title: 'getting-started',
      items: [
        {
          id: 'ZG9jOjIyMDYwNQ',
          title: 'About Our APIs',
          type: 'article',
          slug: 'ZG9jOjIyMDYwNQ-about-our-ap-is',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYwNg',
          title: 'API Status Codes',
          type: 'article',
          slug: 'ZG9jOjIyMDYwNg-api-status-codes',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYwNw',
          title: 'Authentication',
          type: 'article',
          slug: 'ZG9jOjIyMDYwNw-authentication',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYwOA',
          title: 'API Reference',
          type: 'article',
          slug: 'ZG9jOjIyMDYwOA-api-reference',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYwOQ',
          title: 'API Best Practices',
          type: 'article',
          slug: 'ZG9jOjIyMDYwOQ-api-best-practices',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYxMA',
          title: 'building-apps-bigcommerce',
          type: 'article',
          slug: 'ZG9jOjIyMDYxMA-building-apps-bigcommerce',
          meta: '',
        },
        {
          title: 'building-apps-bigcommerce',
          items: [
            {
              id: 'ZG9jOjIyMDczMA',
              title: 'Building an App',
              type: 'article',
              slug: 'ZG9jOjIyMDczMA-building-an-app',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDczMQ',
              title: 'Types of Apps',
              type: 'article',
              slug: 'ZG9jOjIyMDczMQ-types-of-apps',
              meta: '',
            },
          ],
        },
        {
          id: 'ZG9jOjIyMDYxMQ',
          title: 'Filtering',
          type: 'article',
          slug: 'ZG9jOjIyMDYxMQ-filtering',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYxMg',
          title: 'BigCommerce APIs Quick Start',
          type: 'article',
          slug: 'ZG9jOjIyMDYxMg-big-commerce-ap-is-quick-start',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYxMw',
          title: "Authenticating BigCommerce's REST APIs",
          type: 'article',
          slug: 'ZG9jOjIyMDYxMw-authenticating-big-commerce-s-rest-ap-is',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYxNA',
          title: 'webhooks',
          type: 'article',
          slug: 'ZG9jOjIyMDYxNA-webhooks',
          meta: '',
        },
        {
          title: 'webhooks',
          items: [
            {
              id: 'ZG9jOjIyMDczMg',
              title: 'Webhooks Overview',
              type: 'article',
              slug: 'ZG9jOjIyMDczMg-webhooks-overview',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDczMw',
              title: 'Webhooks Tutorial',
              type: 'article',
              slug: 'ZG9jOjIyMDczMw-webhooks-tutorial',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDczNA',
              title: 'Webhooks',
              type: 'article',
              slug: 'ZG9jOjIyMDczNA-webhooks',
              meta: '',
            },
          ],
        },
        {
          id: 'ZG9jOjIyMDYzMA',
          title: 'App Compatibility',
          type: 'article',
          slug: 'ZG9jOjIyMDYzMA-app-compatibility',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYzMQ',
          title: 'Gutenberg Support',
          type: 'article',
          slug: 'ZG9jOjIyMDYzMQ-gutenberg-support',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYzMg',
          title: 'Install',
          type: 'article',
          slug: 'ZG9jOjIyMDYzMg-install',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYzMw',
          title: 'Introduction',
          type: 'article',
          slug: 'ZG9jOjIyMDYzMw-introduction',
          meta: '',
        },
        {
          id: 'ZG9jOjE0MzE4NTI',
          title: 'Site Launch Checklist',
          type: 'article',
          slug: 'ZG9jOjE0MzE4NTI-site-launch-checklist',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYzNA',
          title: 'Supported Features',
          type: 'article',
          slug: 'ZG9jOjIyMDYzNA-supported-features',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5Nw',
          title: 'About Stencil',
          type: 'article',
          slug: 'ZG9jOjIyMDY5Nw-about-stencil',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5OA',
          title: 'Stencil Technology Stack',
          type: 'article',
          slug: 'ZG9jOjIyMDY5OA-stencil-technology-stack',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5OQ',
          title: 'Transitioning to Stencil',
          type: 'article',
          slug: 'ZG9jOjIyMDY5OQ-transitioning-to-stencil',
          meta: '',
        },
      ],
    },
    {
      title: 'orders',
      items: [
        {
          id: 'ZG9jOjIyMDYxNQ',
          title: 'Order Refunds',
          type: 'article',
          slug: 'ZG9jOjIyMDYxNQ-order-refunds',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYxNg',
          title: 'Orders Overview',
          type: 'article',
          slug: 'ZG9jOjIyMDYxNg-orders-overview',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYxNw',
          title: 'Orders',
          type: 'article',
          slug: 'ZG9jOjIyMDYxNw-orders',
          meta: '',
        },
      ],
    },
    {
      title: 'partner',
      items: [
        {
          id: 'ZG9jOjIyMDYxOA',
          title: 'App Store Approval Requirements',
          type: 'article',
          slug: 'ZG9jOjIyMDYxOA-app-store-approval-requirements',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYxOQ',
          title: 'Becoming a Partner',
          type: 'article',
          slug: 'ZG9jOjIyMDYxOQ-becoming-a-partner',
          meta: '',
        },
        {
          id: 'ZG9jOjM4MzMyNTE',
          title: 'Create a Sandbox Store',
          type: 'article',
          slug: 'ZG9jOjM4MzMyNTE-create-a-sandbox-store',
          meta: '',
        },
        {
          id: 'ZG9jOjM4MzMyNTI',
          title: 'Developer Portal Overview',
          type: 'article',
          slug: 'ZG9jOjM4MzMyNTI-developer-portal-overview',
          meta: '',
        },
        {
          id: 'ZG9jOjM4MzMyNTM',
          title: 'Marketing API',
          type: 'article',
          slug: 'ZG9jOjM4MzMyNTM-marketing-api',
          meta: '',
        },
        {
          id: 'ZG9jOjM4MzMyNTQ',
          title: 'Resources',
          type: 'article',
          slug: 'ZG9jOjM4MzMyNTQ-resources',
          meta: '',
        },
        {
          id: 'ZG9jOjM4MzMyNTU',
          title: 'Support',
          type: 'article',
          slug: 'ZG9jOjM4MzMyNTU-support',
          meta: '',
        },
        {
          id: 'ZG9jOjM4MzMyNTY',
          title: 'Partner Program',
          type: 'article',
          slug: 'ZG9jOjM4MzMyNTY-partner-program',
          meta: '',
        },
      ],
    },
    {
      title: 'payments',
      items: [
        {
          id: 'ZG9jOjIyMDYyMA',
          title: 'Payments API',
          type: 'article',
          slug: 'ZG9jOjIyMDYyMA-payments-api',
          meta: '',
        },
      ],
    },
    {
      title: 'store-management',
      items: [
        {
          id: 'ZG9jOjIyMDYyMQ',
          title: 'shipping',
          type: 'article',
          slug: 'ZG9jOjIyMDYyMQ-shipping',
          meta: '',
        },
        {
          title: 'shipping',
          items: [
            {
              id: 'ZG9jOjIyMDczNQ',
              title: 'ShipperHQ Metafields',
              type: 'article',
              slug: 'ZG9jOjIyMDczNQ-shipper-hq-metafields',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDczNg',
              title: 'Shipping',
              type: 'article',
              slug: 'ZG9jOjIyMDczNg-shipping',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDczNw',
              title: 'Shipping Providers',
              type: 'article',
              slug: 'ZG9jOjIyMDczNw-shipping-providers',
              meta: '',
            },
          ],
        },
      ],
    },
    {
      title: 'storefront',
      items: [
        {
          title: 'graphql',
          items: [
            {
              id: 'ZG9jOjIyMDczOA',
              title: 'GraphQL Storefront API Example Queries',
              type: 'article',
              slug: 'ZG9jOjIyMDczOA-graph-ql-storefront-api-example-queries',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDczOQ',
              title: 'GraphQL Storefront API Overview',
              type: 'article',
              slug: 'ZG9jOjIyMDczOQ-graph-ql-storefront-api-overview',
              meta: '',
            },
          ],
        },
        {
          id: 'ZG9jOjIyMDYyMg',
          title: 'Scripts API',
          type: 'article',
          slug: 'ZG9jOjIyMDYyMg-scripts-api',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYyMw',
          title: 'widgets',
          type: 'article',
          slug: 'ZG9jOjIyMDYyMw-widgets',
          meta: '',
        },
        {
          title: 'widgets',
          items: [
            {
              id: 'ZG9jOjM4MzMzOTc',
              title: 'Global Regions Tutorial',
              type: 'article',
              slug: 'ZG9jOjM4MzMzOTc-global-regions-tutorial',
              meta: '',
            },
            {
              id: 'ZG9jOjM4MzMzOTg',
              title: 'Widget Versioning Tutorial',
              type: 'article',
              slug: 'ZG9jOjM4MzMzOTg-widget-versioning-tutorial',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDc0MA',
              title: 'Widgets Code Samples',
              type: 'article',
              slug: 'ZG9jOjIyMDc0MA-widgets-code-samples',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDc0MQ',
              title: 'Widgets API',
              type: 'article',
              slug: 'ZG9jOjIyMDc0MQ-widgets-api',
              meta: '',
            },
            {
              id: 'ZG9jOjIyMDc0Mg',
              title: 'Widgets Tutorial',
              type: 'article',
              slug: 'ZG9jOjIyMDc0Mg-widgets-tutorial',
              meta: '',
            },
          ],
        },
      ],
    },
    {
      title: 'bigcommerce-for-wordpress',
    },
    {
      title: 'changelog',
      items: [
        {
          id: 'ZG9jOjIyMDYyNA',
          title: 'plugin-changelog',
          type: 'article',
          slug: 'ZG9jOjIyMDYyNA-plugin-changelog',
          meta: '',
        },
      ],
    },
    {
      title: 'extending-the-plugin',
      items: [
        {
          id: 'ZG9jOjIyMDYyNQ',
          title: 'AMP for the BigCommerce WordPress plugin',
          type: 'article',
          slug: 'ZG9jOjIyMDYyNQ-amp-for-the-big-commerce-word-press-plugin',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYyNg',
          title: 'Code Reference',
          type: 'article',
          slug: 'ZG9jOjIyMDYyNg-code-reference',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYyNw',
          title: 'Customization Guide',
          type: 'article',
          slug: 'ZG9jOjIyMDYyNw-customization-guide',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYyOA',
          title: 'Multi-Channel Capabilities',
          type: 'article',
          slug: 'ZG9jOjIyMDYyOA-multi-channel-capabilities',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYyOQ',
          title: 'Proxy REST API Endpoints',
          type: 'article',
          slug: 'ZG9jOjIyMDYyOQ-proxy-rest-api-endpoints',
          meta: '',
        },
      ],
    },
    {
      title: 'setup',
      items: [
        {
          id: 'ZG9jOjIyMDYzNQ',
          title: 'Multisite Setup',
          type: 'article',
          slug: 'ZG9jOjIyMDYzNQ-multisite-setup',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYzNg',
          title: 'Plugin Settings',
          type: 'article',
          slug: 'ZG9jOjIyMDYzNg-plugin-settings',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYzNw',
          title: 'Product Import',
          type: 'article',
          slug: 'ZG9jOjIyMDYzNw-product-import',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYzOA',
          title: 'Shortcodes',
          type: 'article',
          slug: 'ZG9jOjIyMDYzOA-shortcodes',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDYzOQ',
          title: 'Troubleshooting',
          type: 'article',
          slug: 'ZG9jOjIyMDYzOQ-troubleshooting',
          meta: '',
        },
      ],
    },
    {
      title: 'legacy',
    },
    {
      title: 'blueprint-reference',
      items: [
        {
          id: 'ZG9jOjIyMDY0MA',
          title: '403 Layout',
          type: 'article',
          slug: 'ZG9jOjIyMDY0MA-403-layout',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY0MQ',
          title: 'AccountDownloadItemsBreadcrumb Panel',
          type: 'article',
          slug: 'ZG9jOjIyMDY0MQ-account-download-items-breadcrumb-panel',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY0Mg',
          title: 'AccountDownloadItemList Snippet',
          type: 'article',
          slug: 'ZG9jOjIyMDY0Mg-account-download-item-list-snippet',
          meta: '',
        },
      ],
    },
    {
      title: 'blueprint-themes',
      items: [
        {
          id: 'ZG9jOjIyMDY0Mw',
          title: 'Anatomy of a Theme',
          type: 'article',
          slug: 'ZG9jOjIyMDY0Mw-anatomy-of-a-theme',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY0NA',
          title: 'Blueprint and Developer Mode',
          type: 'article',
          slug: 'ZG9jOjIyMDY0NA-blueprint-and-developer-mode',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY0NQ',
          title: 'Email Templates',
          type: 'article',
          slug: 'ZG9jOjIyMDY0NQ-email-templates',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY0Ng',
          title: 'Template Syntax',
          type: 'article',
          slug: 'ZG9jOjIyMDY0Ng-template-syntax',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY0Nw',
          title: 'Theme Update Process',
          type: 'article',
          slug: 'ZG9jOjIyMDY0Nw-theme-update-process',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY0OA',
          title: 'Checkout Styling',
          type: 'article',
          slug: 'ZG9jOjIyMDY0OA-checkout-styling',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY0OQ',
          title: 'Global Variables',
          type: 'article',
          slug: 'ZG9jOjIyMDY0OQ-global-variables',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY1MA',
          title: 'LNG Variables',
          type: 'article',
          slug: 'ZG9jOjIyMDY1MA-lng-variables',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY1MQ',
          title: 'Product Filtering Toolkit',
          type: 'article',
          slug: 'ZG9jOjIyMDY1MQ-product-filtering-toolkit',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY1Mg',
          title: 'ReCaptcha 2',
          type: 'article',
          slug: 'ZG9jOjIyMDY1Mg-re-captcha-2',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY1Mw',
          title: 'Store-Wide Global Panels',
          type: 'article',
          slug: 'ZG9jOjIyMDY1Mw-store-wide-global-panels',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY1NA',
          title: 'Store-Wide Global Variables',
          type: 'article',
          slug: 'ZG9jOjIyMDY1NA-store-wide-global-variables',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY1NQ',
          title: 'Style Editor',
          type: 'article',
          slug: 'ZG9jOjIyMDY1NQ-style-editor',
          meta: '',
        },
      ],
    },
    {
      title: 'stencil-themes',
      items: [
        {
          id: 'ZG9jOjIyMDY1Ng',
          title: 'Installing Legacy Theme Modules',
          type: 'article',
          slug: 'ZG9jOjIyMDY1Ng-installing-legacy-theme-modules',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY1Nw',
          title: 'Stored Credit Card Management',
          type: 'article',
          slug: 'ZG9jOjIyMDY1Nw-stored-credit-card-management',
          meta: '',
        },
      ],
    },
    {
      title: 'v2-catalog-products',
      items: [
        {
          id: 'ZG9jOjIyMDY1OA',
          title: 'Brands',
          type: 'article',
          slug: 'ZG9jOjIyMDY1OA-brands',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY1OQ',
          title: 'Bulk Pricing Rules',
          type: 'article',
          slug: 'ZG9jOjIyMDY1OQ-bulk-pricing-rules',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2MA',
          title: 'Categories',
          type: 'article',
          slug: 'ZG9jOjIyMDY2MA-categories',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2MQ',
          title: 'Custom Fields',
          type: 'article',
          slug: 'ZG9jOjIyMDY2MQ-custom-fields',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2Mg',
          title: 'Option Set Options',
          type: 'article',
          slug: 'ZG9jOjIyMDY2Mg-option-set-options',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2Mw',
          title: 'Option Sets',
          type: 'article',
          slug: 'ZG9jOjIyMDY2Mw-option-sets',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2NA',
          title: 'Option Values',
          type: 'article',
          slug: 'ZG9jOjIyMDY2NA-option-values',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2NQ',
          title: 'Product Options',
          type: 'article',
          slug: 'ZG9jOjIyMDY2NQ-product-options',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2Ng',
          title: 'Product Images',
          type: 'article',
          slug: 'ZG9jOjIyMDY2Ng-product-images',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2Nw',
          title: 'Product Options',
          type: 'article',
          slug: 'ZG9jOjIyMDY2Nw-product-options',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2OA',
          title: 'Product Reviews',
          type: 'article',
          slug: 'ZG9jOjIyMDY2OA-product-reviews',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY2OQ',
          title: 'Product Rules',
          type: 'article',
          slug: 'ZG9jOjIyMDY2OQ-product-rules',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY3MA',
          title: 'Product SKU',
          type: 'article',
          slug: 'ZG9jOjIyMDY3MA-product-sku',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY3MQ',
          title: 'Product Videos',
          type: 'article',
          slug: 'ZG9jOjIyMDY3MQ-product-videos',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY3Mg',
          title: 'Products',
          type: 'article',
          slug: 'ZG9jOjIyMDY3Mg-products',
          meta: '',
        },
      ],
    },
    {
      title: 'v2-products',
      items: [
        {
          id: 'ZG9jOjIyMDY3Mw',
          title: 'V2 versus V3 API',
          type: 'article',
          slug: 'ZG9jOjIyMDY3Mw-v2-versus-v3-api',
          meta: '',
        },
      ],
    },
    {
      title: 'stencil-docs',
    },
    {
      title: 'configure-store-design-ui',
      items: [
        {
          id: 'ZG9jOjIyMDY3NA',
          title: 'Defining Global Styles',
          type: 'article',
          slug: 'ZG9jOjIyMDY3NA-defining-global-styles',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY3NQ',
          title: 'Defining UI Options',
          type: 'article',
          slug: 'ZG9jOjIyMDY3NQ-defining-ui-options',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY3Ng',
          title: 'Store Design Overview',
          type: 'article',
          slug: 'ZG9jOjIyMDY3Ng-store-design-overview',
          meta: '',
        },
      ],
    },
    {
      title: 'customizing-checkout',
      items: [
        {
          id: 'ZG9jOjIyMDY3Nw',
          title: 'Checkout/Confirmation Injection Options',
          type: 'article',
          slug: 'ZG9jOjIyMDY3Nw-checkout-confirmation-injection-options',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY3OA',
          title: 'Checkout SDK Tutorial',
          type: 'article',
          slug: 'ZG9jOjIyMDY3OA-checkout-sdk-tutorial',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY3OQ',
          title: 'Checkout SDK Quickstart',
          type: 'article',
          slug: 'ZG9jOjIyMDY3OQ-checkout-sdk-quickstart',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY4MA',
          title: 'Restyle Optimized One-Page Checkout',
          type: 'article',
          slug: 'ZG9jOjIyMDY4MA-restyle-optimized-one-page-checkout',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY4MQ',
          title: 'PayPal Smart Buttons',
          type: 'article',
          slug: 'ZG9jOjIyMDY4MQ-pay-pal-smart-buttons',
          meta: '',
        },
      ],
    },
    {
      title: 'deploying-a-theme',
      items: [
        {
          id: 'ZG9jOjIyMDY4Mg',
          title: 'Bundling and Pushing a Theme',
          type: 'article',
          slug: 'ZG9jOjIyMDY4Mg-bundling-and-pushing-a-theme',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY4Mw',
          title: "Checking a Theme's Size",
          type: 'article',
          slug: 'ZG9jOjIyMDY4Mw-checking-a-theme-s-size',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY4NA',
          title: 'Naming Your Theme and Theme Variations',
          type: 'article',
          slug: 'ZG9jOjIyMDY4NA-naming-your-theme-and-theme-variations',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY4NQ',
          title: 'Preparing Thumbnail Images',
          type: 'article',
          slug: 'ZG9jOjIyMDY4NQ-preparing-thumbnail-images',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY4Ng',
          title: 'Troubleshooting Theme Uploads',
          type: 'article',
          slug: 'ZG9jOjIyMDY4Ng-troubleshooting-theme-uploads',
          meta: '',
        },
      ],
    },
    {
      title: 'developing-further',
      items: [
        {
          id: 'ZG9jOjIyMDY4Nw',
          title: 'Add reCAPTCHA V2',
          type: 'article',
          slug: 'ZG9jOjIyMDY4Nw-add-re-captcha-v2',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY4OA',
          title: 'Catalog Price Object Examples',
          type: 'article',
          slug: 'ZG9jOjIyMDY4OA-catalog-price-object-examples',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY4OQ',
          title: 'BigCommerce Email Templates',
          type: 'article',
          slug: 'ZG9jOjIyMDY4OQ-big-commerce-email-templates',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5MA',
          title: 'Customizing Invoices',
          type: 'article',
          slug: 'ZG9jOjIyMDY5MA-customizing-invoices',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5MQ',
          title: 'Customizing Printable Packing Slips',
          type: 'article',
          slug: 'ZG9jOjIyMDY5MQ-customizing-printable-packing-slips',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5Mg',
          title: 'Google AMP',
          type: 'article',
          slug: 'ZG9jOjIyMDY5Mg-google-amp',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5Mw',
          title: 'Google Analytics Enhanced ECommerce',
          type: 'article',
          slug: 'ZG9jOjIyMDY5Mw-google-analytics-enhanced-e-commerce',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5NA',
          title: 'Modify the Login Form',
          type: 'article',
          slug: 'ZG9jOjIyMDY5NA-modify-the-login-form',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5NQ',
          title: 'Stored Payment Methods',
          type: 'article',
          slug: 'ZG9jOjIyMDY5NQ-stored-payment-methods',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDY5Ng',
          title: 'Theme Updates and Version Control',
          type: 'article',
          slug: 'ZG9jOjIyMDY5Ng-theme-updates-and-version-control',
          meta: '',
        },
      ],
    },
    {
      title: 'installing-stencil-cli',
      items: [
        {
          id: 'ZG9jOjIyMDcwMA',
          title: 'Installing Stencil CLI',
          type: 'article',
          slug: 'ZG9jOjIyMDcwMA-installing-stencil-cli',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcwMQ',
          title: 'Live Previewing a Theme',
          type: 'article',
          slug: 'ZG9jOjIyMDcwMQ-live-previewing-a-theme',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcwMg',
          title: 'Stencil CLI Options and Commands',
          type: 'article',
          slug: 'ZG9jOjIyMDcwMg-stencil-cli-options-and-commands',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcwMw',
          title: 'Troubleshooting Your Setup',
          type: 'article',
          slug: 'ZG9jOjIyMDcwMw-troubleshooting-your-setup',
          meta: '',
        },
      ],
    },
    {
      title: 'javascript-and-event-hooks',
      items: [
        {
          id: 'ZG9jOjEyNDYyOTg',
          title: 'Adding Javascript to Your Stencil Theme',
          type: 'article',
          slug: 'ZG9jOjEyNDYyOTg-adding-javascript-to-your-stencil-theme',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcwNA',
          title: 'Customizing Javascript',
          type: 'article',
          slug: 'ZG9jOjIyMDcwNA-customizing-javascript',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcwNQ',
          title: 'Dynamic Content Rendering on Stencil Storefronts',
          type: 'article',
          slug:
            'ZG9jOjIyMDcwNQ-dynamic-content-rendering-on-stencil-storefronts',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcwNg',
          title: 'Event Hooks',
          type: 'article',
          slug: 'ZG9jOjIyMDcwNg-event-hooks',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcwNw',
          title: 'Adding npm Packages to a Theme',
          type: 'article',
          slug: 'ZG9jOjIyMDcwNw-adding-npm-packages-to-a-theme',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcwOA',
          title: 'Remote API Tutorial',
          type: 'article',
          slug: 'ZG9jOjIyMDcwOA-remote-api-tutorial',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcwOQ',
          title: 'Rendering HTML with Ajax',
          type: 'article',
          slug: 'ZG9jOjIyMDcwOQ-rendering-html-with-ajax',
          meta: '',
        },
      ],
    },
    {
      title: 'localization',
      items: [
        {
          id: 'ZG9jOjIyMDcxMA',
          title: 'Localizing Stores',
          type: 'article',
          slug: 'ZG9jOjIyMDcxMA-localizing-stores',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcxMQ',
          title: 'Multi-Language Checkout',
          type: 'article',
          slug: 'ZG9jOjIyMDcxMQ-multi-language-checkout',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcxMg',
          title: 'Translation Keys',
          type: 'article',
          slug: 'ZG9jOjIyMDcxMg-translation-keys',
          meta: '',
        },
      ],
    },
    {
      title: 'page-builder',
      items: [
        {
          id: 'ZG9jOjE0MzE5MzM',
          title: 'Theme Styles Configuration',
          type: 'article',
          slug: 'ZG9jOjE0MzE5MzM-theme-styles-configuration',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcxMw',
          title: 'Page Builder Overview',
          type: 'article',
          slug: 'ZG9jOjIyMDcxMw-page-builder-overview',
          meta: '',
        },
        {
          id: 'ZG9jOjE4MjQ5MzQ',
          title: 'Create Widgets Powered by GraphQL',
          type: 'article',
          slug: 'ZG9jOjE4MjQ5MzQ-create-widgets-powered-by-graph-ql',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcxNA',
          title: 'Third-Party Widgets',
          type: 'article',
          slug: 'ZG9jOjIyMDcxNA-third-party-widgets',
          meta: '',
        },
        {
          id: 'ZG9jOjE0MzE5MzY',
          title: 'Widget UI Schema',
          type: 'article',
          slug: 'ZG9jOjE0MzE5MzY-widget-ui-schema',
          meta: '',
        },
      ],
    },
    {
      title: 'reference-docs',
      items: [
        {
          id: 'ZG9jOjIyMDcxNQ',
          title: 'Common Objects',
          type: 'article',
          slug: 'ZG9jOjIyMDcxNQ-common-objects',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcxNg',
          title: 'Front Matter Reference',
          type: 'article',
          slug: 'ZG9jOjIyMDcxNg-front-matter-reference',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcxNw',
          title: 'Global Objects and Properties',
          type: 'article',
          slug: 'ZG9jOjIyMDcxNw-global-objects-and-properties',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcxOA',
          title: 'Handlebars Helpers Reference',
          type: 'article',
          slug: 'ZG9jOjIyMDcxOA-handlebars-helpers-reference',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcxOQ',
          title: 'Other Objects and Properties Overview',
          type: 'article',
          slug: 'ZG9jOjIyMDcxOQ-other-objects-and-properties-overview',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcyMA',
          title: 'Stencil Utils Reference',
          type: 'article',
          slug: 'ZG9jOjIyMDcyMA-stencil-utils-reference',
          meta: '',
        },
      ],
    },
    {
      title: 'storefront-customization',
      items: [
        {
          id: 'ZG9jOjIyMDcyMQ',
          title: 'Custom Sass Functions',
          type: 'article',
          slug: 'ZG9jOjIyMDcyMQ-custom-sass-functions',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcyMg',
          title: 'Custom Templates',
          type: 'article',
          slug: 'ZG9jOjIyMDcyMg-custom-templates',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcyMw',
          title: 'Page Composition and Styling',
          type: 'article',
          slug: 'ZG9jOjIyMDcyMw-page-composition-and-styling',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcyNA',
          title: 'Theme Assets',
          type: 'article',
          slug: 'ZG9jOjIyMDcyNA-theme-assets',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcyNQ',
          title: 'Custom Fonts and Icons',
          type: 'article',
          slug: 'ZG9jOjIyMDcyNQ-custom-fonts-and-icons',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcyNg',
          title: 'Using Disqus',
          type: 'article',
          slug: 'ZG9jOjIyMDcyNg-using-disqus',
          meta: '',
        },
        {
          id: 'ZG9jOjIyMDcyNw',
          title: 'Using Front Matter',
          type: 'article',
          slug: 'ZG9jOjIyMDcyNw-using-front-matter',
          meta: '',
        },
      ],
    },
    {
      title: 'Schemas',
    },
    {
      id: 'c2NoOjIyMDAzMw',
      title: 'Collection Meta',
      type: 'model',
      slug: 'c2NoOjIyMDAzMw-collection-meta',
      meta: '',
    },
    {
      id: 'c2NoOjIyMDAzNA',
      title: 'Pagination',
      type: 'model',
      slug: 'c2NoOjIyMDAzNA-pagination',
      meta: '',
    },
  ];

  return <NumberList titles={items} style={{ marginLeft: '5vw' }} />;
}
