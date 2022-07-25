<template>
  <b-modal :ref="modalRef" title="Filter runs" class="text-center" @hidden="destroyModal" hide-footer centered
           size="lg">
    <filter-component :filterIndex="filterIndex"
                      v-for="filterIndex in filters.length + 1"
                      :key="`filter-${filterIndex}`"
                      :parsed-splits="parsedSplits"/>
  </b-modal>
</template>

<script lang="ts">
import {SplitFile}                    from '~/util/splits';
import {Component, Prop, mixins}      from 'nuxt-property-decorator';
import store, {Filter}                from '~/util/store';
import BaseModal                      from '~/components/modals/BaseModal.vue';

@Component
export default class FilterModal extends mixins(BaseModal) {
  modalRef: string = 'FilterModal';

  @Prop()
  parsedSplits!: SplitFile;

  filters: Filter[] = store.state.filters;
}
</script>
