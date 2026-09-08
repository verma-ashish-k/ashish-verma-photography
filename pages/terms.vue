<template>
  <div>
    <PageHero eyebrow="Terms" title="Terms and Conditions for Urban Snap" lede="Effective Date: 2024-01-01" />
    <section class="section">
      <article class="site-shell card-surface legal-copy max-w-3xl p-6 sm:p-10">
        <p>Welcome to Urban Snap. These terms and conditions outline the rules and regulations for the use of Urban Snap's services.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using our services, you agree to comply with and be bound by the following terms and
          conditions. If you disagree with any part of these terms, please do not use our services.
        </p>

        <h2>2. Services</h2>
        <p>
          Urban Snap provides a range of freelance photography services. Specific services and rates are agreed upon
          before the commencement of any project.
        </p>

        <h2>3. Booking and Cancellation</h2>
        <p>
          A non-refundable deposit is required to secure your booking. Cancellations or rescheduling must be made at
          least one in advance, or the deposit is forfeited.
        </p>

        <h2>4. Intellectual Property Rights</h2>
        <p>
          Unless otherwise agreed, Urban Snap retains all rights to the images produced. Clients are granted a
          non-exclusive, non-transferable license for personal or agreed-upon commercial use.
        </p>

        <h2>5. Use of Images</h2>
        <p>
          The client agrees not to alter, sell, distribute, or use images for commercial purposes without prior written
          consent. Credit to Urban Snap must be given when images are used publicly, where feasible.
        </p>

        <h2>6. Unauthorized Use and Copyright Infringement</h2>
        <p>
          Unauthorized use, reproduction, modification, distribution, or display of any photographs or images produced
          by Urban Snap without explicit written consent is strictly prohibited. In accordance with Canadian copyright
          law, any such unauthorized use constitutes copyright infringement and may result in civil and criminal
          penalties.
        </p>
        <p>In the event of unauthorized use, the infringing party will be liable for:</p>
        <ul>
          <li>Statutory damages for each violation.</li>
          <li>Full reimbursement of legal fees and costs incurred by Urban Snap in enforcing its rights.</li>
          <li>Any additional financial compensation deemed appropriate as per the severity of the infringement.</li>
        </ul>
        <p>We rigorously enforce our intellectual property rights and will seek all available remedies under Canadian law to protect our work.</p>

        <h2>7. Liability</h2>
        <p>
          Urban Snap is not liable for any direct, indirect, incidental, or consequential damages resulting from the use
          of our services or the final product.
        </p>

        <h2>8. Privacy and Confidentiality</h2>
        <p>
          Personal information collected is used solely for the purpose of providing services and will not be shared
          with third parties without consent, except as required by law.
        </p>

        <h2>9. Force Majeure</h2>
        <p>Urban Snap shall not be liable for any failure to perform due to unforeseen circumstances or causes beyond our reasonable control.</p>

        <h2>10. Governing Law</h2>
        <p>
          These terms shall be governed and construed in accordance with the laws of Alberta, Canada, without regard to
          its conflict of law provisions.
        </p>

        <h2>11. Amendments to Terms</h2>
        <p>
          We reserve the right to modify or replace these terms at any time. By continuing to access or use our services
          after revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2>12. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <ul>
          <li><strong>Website:</strong> urbansnap.ca</li>
          <li><strong>Phone:</strong> 403-994-7627</li>
          <li><strong>Email:</strong> {{ site.legalEmail }}</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const site = useSite()

useSeoPage({
  title: 'Terms and Conditions — Urban Snap',
  description: 'Terms and conditions for Urban Snap photography services in Calgary, Alberta.',
  path: '/terms',
})
</script>
