<template>
  <b-modal :ref="modalRef" title="Filter runs" class="text-center" @hidden="destroyModal" hide-footer centered
           size="xl">
    <filter-component :filterIndex="filterIndex"
                      v-for="filterIndex in filters.length + 1"
                      :key="`filter-${filterIndex}`"
                      :parsed-splits="parsedSplits"/>
  </b-modal>
</template>

<script lang="ts">
import {SplitFile}                      from '~/util/splits';
import {Component, Watch, Prop, mixins} from 'nuxt-property-decorator';
import {Filter}                         from '~/util/filter';
import store                            from '~/util/store';
import BaseModal                        from '~/components/modals/BaseModal.vue';

@Component
export default class FilterModal extends mixins(BaseModal) {
  modalRef: string = 'FilterModal';

  @Prop()
  parsedSplits!: SplitFile;

  filters: Filter[] = store.state.filters;

  @Watch('filters') 
  mashFilters() {
    let attempts = this.parsedSplits.Run.AttemptHistory.Attempt.map(attempt => attempt['@_id']);
    this.filters.forEach(filter => attempts = attempts.filter(attempt => filter.attempts?.includes(attempt)));
    store.state.filteredAttempts = attempts;
  }
}
</script>
