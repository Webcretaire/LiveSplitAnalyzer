<script lang="ts">
import {Component, Vue}     from 'nuxt-property-decorator';
import {BModal}             from 'bootstrap-vue';
import {GlobalEventEmitter} from '~/util/globalEvents';

@Component
export default class BaseModal extends Vue {
  modalRef: string = 'BaseModal';

  destroyModal() {
    GlobalEventEmitter.$emit('closeModal');
  }

  hideModal() {
    const m = this.$refs[this.modalRef] as BModal;
    if (m) m.hide();
  }

  mounted() {
    const m = this.$refs[this.modalRef] as BModal;
    if (m) m.show();
  }
}
</script>

