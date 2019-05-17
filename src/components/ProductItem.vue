<template>
    <div>
        <div>
            <b-card-group>
                <b-card
                    border-variant="info"
                    :header="$route.params.gender"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    header-size-variant="lg"
                    align="center"
                >
                    <b-card-text>
                        <input
                            class="form-control"
                            type="number"
                            placeholder="Quantity"
                        >
                        <b-button
                            class="form-control mt-3"
                            size="sm"
                            variant="info"
                        >BUY</b-button>
                    </b-card-text>
                </b-card>

            </b-card-group>
        </div>
    </div>
</template>

<script>

export default {
    
};
</script>

<style>
</style>
