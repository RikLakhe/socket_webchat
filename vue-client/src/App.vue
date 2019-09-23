<template>
      <v-container fluid>
        <v-layout row mb-4>
          <v-flex>
            <Graph></Graph>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  import Graph from "@/components/Graph";
  export default {
    components: {
      Graph
    }
  };
</script>