<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form Two - Login</h3>
                <p>fill the form</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="username" required>
                <input type="password" placeholder="password" required>
            </div>
            <div slot="form-controls">
                <button v-on:click="handle">Login</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
import formHelper from './formHelper'

export default {
    components:{
        'form-helper': formHelper,
    }
}
</script>

<style>

</style>