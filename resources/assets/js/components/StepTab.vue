<template>
    <div class="stepwizard">
        <div class="stepwizard-row">
            <div :class="['stepwizard-step', { active: active == 1 } ]">
                <button type="button" class="o-button o-button--primary o-button--block btn-circle">1</button>
            </div>
            <div :class="['stepwizard-step', { active: active == 2 } ]">
                <button type="button" class="o-button o-button--primary o-button--block btn-circle">2</button>
            </div>
            <div :class="['stepwizard-step step-line-false', { active: active == 3 } ]">
                <button type="button" class="o-button o-button--primary o-button--block btn-circle">3</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            active: { required: true },
        }
    }
</script>