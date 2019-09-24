<template>
    <v-card class="mx-auto" color="grey lighten-4" max-width="400">
        <v-card-title>
            <v-icon :color="'red'" class="mr-5" size="64">favorite</v-icon>
            <v-layout column align-start>
                <div class="caption grey--text text-uppercase">Heart rate 2</div>
                <div>
                    <span class="display-2 font-weight-black" v-text="display_beat2 || '—'"></span>
                    <strong v-if="display_beat2">BPM</strong>
                </div>
            </v-layout>
        </v-card-title>

        <v-sheet color="transparent">
            <v-sparkline
                    :smooth="50"
                    :gradient="['#445175', '#171738', '#2e1760', '#00487c', '#4bb3fd']"
                    :line-width="3"
                    :key="String(display_beat2)"
                    :value="heartbeats2"
                    stroke-linecap="round"
            ></v-sparkline>
        </v-sheet>
        <v-card-actions></v-card-actions>
    </v-card>
</template>

<script>
    export default {
        sockets: {
            pulse2: function(beat) {
                this.heartbeats2.push(beat);
                this.heartbeats2.shift();
            }
        },
        data: () => ({
            heartbeats2: []
        }),
        computed: {
            display_beat2() {
                return this.heartbeats2[this.heartbeats2.length - 1];
            }
        },
        created() {
            this.takeInitialPulse();
        },
        methods: {
            takeInitialPulse() {
                this.heartbeats2 = Array.from({ length: 10 }, this.random_heartbeat2);
            },
            random_heartbeat2() {
                return Math.ceil(Math.random() * (120 - 80) + 80);
            }
        }
    };
</script>