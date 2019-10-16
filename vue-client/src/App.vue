<template>
      <v-container fluid>
        <v-layout row mb-4>
          <v-flex>
            <Graph />
            <Graph2 />
          </v-flex>
        </v-layout>
          <PopupMessage />
      </v-container>
</template>

<script>
    import Graph from "@/components/Graph";
    import Graph2 from "@/components/Graph2";

    import PopupMessage from "@/components/PopupMessage";

    export default {
    components: {
      Graph,
      Graph2,
        PopupMessage
    }
  };
</script>