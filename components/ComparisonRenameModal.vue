<template>
  <b-modal :ref="modalRef" title="Rename comparison" class="text-center" @hidden="destroyModal" hide-footer centered size="lg">
    <div class="text-center" style="max-height: 80vh; overflow: auto">
			<h4>Rename "{{ oldComparisonName }}" to:</h4>
			<b-form-input v-model="newComparisonName" required debounce="500" class="mt-2 mb-2"/>
			<b-button variant="success" :disabled="newNameInput">
				Confirm
			</b-button>
    </div>
  </b-modal>
</template>

<script lang="ts">
import {Component, mixins}  from 'nuxt-property-decorator';
import BaseModal            from '~/components/BaseModal.vue';
import {GlobalEventEmitter} from '~/util/globalEvents';

@Component
export default class ComparisonRenameModal extends mixins(BaseModal) {
  modalRef: string = 'ComparisonRenameModal';

	newComparisonName: string = '';
	
	oldComparisonName: string = '';

	get newNameInput() {
		return this.newComparisonName === '';
	}

	created() {
		let name = '';
		GlobalEventEmitter.$on('referenceComparison', (referenceComparison: string) => this.oldComparisonName = referenceComparison);
	}
}
</script>