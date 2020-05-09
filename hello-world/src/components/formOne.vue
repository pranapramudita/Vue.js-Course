<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form One - Contact Us</h3>
                <p>fill the form</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required>
                <label for="">Your message:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div slot="form-controls">
                <button v-on:click="handle">Submit</button>
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