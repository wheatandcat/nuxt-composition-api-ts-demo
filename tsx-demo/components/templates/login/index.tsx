import { defineComponent } from '@vue/composition-api'
import style from './index.module.scss?module'
import { LoginType } from '~/pages/login.tsx'

export default defineComponent({
  props: {
    fbGoogleLogin: { type: Function, required: true },
  },
  setup(props: LoginType) {
    console.log(style)

    return () => (
      <div class={style.root}>
        <div class={style.icon}>
          <v-img
            src="/logo.png"
            alt="logo"
            width="50px"
            height="50px"
            contain
          />
        </div>
        <v-sheet
          tile
          class="mx-auto"
          height="300"
          width="100%"
          max-width="480"
          elevation="2"
        >
          <div class={style['form-container']}>
            <div class={style.title}>新規会員登録</div>
            <v-divider class="divider" />
            <div class={style['button-container']}>
              <v-btn
                x-large
                class="text-transform-none"
                block
                outlined
                onClick={props.fbGoogleLogin}
              >
                <v-icon left color="secondary">
                  mdi-google-plus
                </v-icon>
                Googleで登録する
              </v-btn>
            </div>
            <div class={style.guide}>
              <div class={style.link}>
                <v-btn
                  x-small
                  class="text-transform-none"
                  text
                  color="primary"
                  href="https://amazing-hawking-a280c3.netlify.com/general/account/"
                  target="_blank"
                >
                  会員登録するとできること
                  <v-icon small left>
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-sheet>
        <div class={style.links}>
          <v-btn
            x-small
            class="text-transform-none"
            text
            href="https://peperomia.app/tos"
            target="_blank"
          >
            利用規約
          </v-btn>
          |
          <v-btn
            x-small
            class="text-transform-none"
            text
            href="https://peperomia.app/policy"
            target="_blank"
          >
            プライバシーポリシー
          </v-btn>
        </div>
      </div>
    )
  },
})
