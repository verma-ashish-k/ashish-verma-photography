<template>
  <section class="section">
    <div class="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal variant="slide">
        <p class="eyebrow">The edit matters</p>
        <h2 class="display mt-4">Before and after, in one frame.</h2>
        <p class="lede mt-5">
          Straight-out-of-camera interiors rarely sell the space. Drag the slider to see how Urban Snap balances
          exposure, color, and verticals for MLS-ready delivery.
        </p>
      </Reveal>
      <Reveal variant="zoom-out">
        <div class="overflow-hidden rounded-[28px] shadow-soft">
          <figure class="diff aspect-[16/9]" tabindex="0">
            <div class="diff-item-1">
              <img src="/images/after.jpg" alt="Professionally edited Calgary interior after Urban Snap processing" />
            </div>
            <div class="diff-item-2">
              <img src="/images/before.jpg" alt="Unedited interior before Urban Snap processing" />
            </div>
            <div class="diff-resizer"></div>
          </figure>
        </div>
      </Reveal>
    </div>
  </section>
</template>
