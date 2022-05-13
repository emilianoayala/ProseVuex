<template>
    <div class="home">
        <h1>PROSEGUR<br>SOLUTIONS</h1>
        <hr />
        <div class="accordion" role="tablist">
            <b-card no-body class="mb-3">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="warning"
                        >Alarms</b-button
                    >
                </b-card-header>
                <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                >
                    <b-card-body>
                        <b-card-text>{{ alarmas }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-3">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="warning"
                        >Security</b-button
                    >
                </b-card-header>
                <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                >
                    <b-card-body>
                        <b-card-text>{{ seguridad }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-3">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="warning"
                        >Cash</b-button
                    >
                </b-card-header>
                <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                >
                    <b-card-body>
                        <b-card-text>{{ efectivo }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            efectivo: `Logistics, Cash, Management and Automation services for Financial Institutions, Banks and businesses.`,
            alarmas: `Offers high quality solutions for residential and commercial alarms.`,
            seguridad: `Comprehensive Security Solutions, with the most innovative Surveillance and Technology services, adapted to each client.`,
        };
    },

};
</script>

<style scoped>
h1 {
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
}

p {
    font-size: 24px;
    font-style: italic;
}

button {
    font-size: 20px;
}
</style>
