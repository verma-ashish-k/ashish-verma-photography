<template>
  <div>
    <PageHero eyebrow="Privacy" title="Privacy Policy for Urban Snap" lede="Effective Date: 01-01-2024" />
    <section class="section">
      <article class="site-shell card-surface legal-copy max-w-3xl p-6 sm:p-10">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Urban Snap. We are committed to protecting the privacy of our clients and website visitors. This
          Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to
          ensure your personal information is handled appropriately.
        </p>
        <p><strong>Contact Information:</strong></p>
        <ul>
          <li><strong>Website:</strong> urbansnap.ca</li>
          <li><strong>Phone:</strong> 403-994-7627</li>
          <li><strong>Email:</strong> {{ site.legalEmail }}</li>
        </ul>

        <h2>2. Information We Collect</h2>
        <p>Urban Snap collects personal information to provide photography services. This may include:</p>
        <ul>
          <li>Contact details such as name, address, email address, and phone number.</li>
          <li>Photos and videos taken during our sessions.</li>
          <li>Payment information and transaction details.</li>
        </ul>

        <h2>3. Use of Information</h2>
        <p>The personal information collected is used to:</p>
        <ul>
          <li>Schedule, perform, and manage photography sessions.</li>
          <li>Process payments and communicate about transactions.</li>
          <li>Provide customer support and respond to inquiries.</li>
          <li>Improve our services and website.</li>
        </ul>

        <h2>4. Consent</h2>
        <p>
          By using our services and providing personal information, you consent to the collection, use, and disclosure
          of your information in accordance with this Privacy Policy.
        </p>

        <h2>5. Disclosure of Information</h2>
        <p>Urban Snap will not share your personal information with third parties, except:</p>
        <ul>
          <li>To service providers involved in the delivery of our services.</li>
          <li>As required by law, such as in response to a subpoena or other legal process.</li>
        </ul>

        <h2>6. Security of Your Information</h2>
        <p>
          We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure,
          including electronic security measures and secure storage practices.
        </p>

        <h2>7. Accessing and Updating Your Information</h2>
        <p>
          You have the right to access, update, and correct inaccuracies in your personal information in our custody and
          control, subject to certain exceptions prescribed by law.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update this policy from time to time. Changes will be posted on our website with an updated revision date.</p>

        <h2>9. Contact Us</h2>
        <p>If you have questions or concerns about our privacy policy or practices, please contact us at the details provided above.</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const site = useSite()

useSeoPage({
  title: 'Privacy Policy — Urban Snap',
  description: 'Privacy policy for Urban Snap, Calgary real estate photography.',
  path: '/privacy',
})
</script>
