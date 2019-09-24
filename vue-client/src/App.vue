<template>
      <v-container fluid>
        <v-layout row mb-4>
          <v-flex>
            <Graph />
            <Graph2 />
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  import Graph from "@/components/Graph";
  import Graph2 from "@/components/Graph2";
  export default {
    components: {
      Graph,
      Graph2,
    }
  };
</script>