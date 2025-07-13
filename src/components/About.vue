<script setup lang="ts">
import {loadImage400x513} from "@/shared"
  const vanessaHead = loadImage400x513('vanessa-head-sm.png');
  const tomHead = loadImage400x513('tom-head-sm.png');
</script>

  <template>

        <section class="feature-section make-page-height feature-even" id="about">
            <div class="container vertical-align-middle">
                <h2 class="theme-title">About the Couple</h2>
                <div class="row break-480px text-center">
                    <div class="col-xs-6 col-md-4 col-md-offset-1">
                        <div
                           data-slide="slide"
                           data-target="about-partner-1"
                           class="color-inherit-link"
                           role="button"
                           aria-controls="about-partner-1"
                           aria-expanded="false"><x></x>
                            <div class="img-treatment">
                              <img :src="vanessaHead" alt="Vanessa Malik"/>
                            </div>
                            <h3 class="h1">The lovely Vanessa</h3>
                            <p class="text-uppercase the-couple-statement">About Her + </p>
                        </div>
                    </div>
                    <span class="hidden-xs hidden-sm heart-divider" aria-hidden="true"></span>
                    <div class="col-xs-6 col-md-4 col-md-offset-2">
                        <div
                           data-slide="slide"
                           data-target="about-partner-2"
                           class="color-inherit-link"
                           role="button"
                           aria-controls="about-partner-2"
                           aria-expanded="false"
                        >
                            <div class="img-treatment">
                                <img :src="tomHead" alt="Tom Cruickshank" />
                            </div>
                            <h3 class="h1">The dashing Tom</h3>
                            <p class="text-uppercase the-couple-statement">About Him + </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

