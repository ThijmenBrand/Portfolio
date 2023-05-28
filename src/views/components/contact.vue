<script setup lang='ts'></script>

<template>
    <section>
        <h1 id="contact-title">Get in touch with me</h1>
        <div class="section-wrapper">
            <div class="contact-form">
                <form action='' class='form'>
                    <p class='field required half'>
                        <label class='label required' for='name'>Name</label>
                        <input class='text-input' id='name' name='name' required type='text'>
                    </p>
                    <p class='field required half'>
                        <label class='label' for='email'>E-mail</label>
                        <input class='text-input' id='email' name='email' required type='email'>
                    </p>
                    <p class='field'>
                        <label class='label' for='message'>Message</label>
                        <textarea class='textarea' cols='50' id='message' name='message' required rows='4'></textarea>
                    </p>
                    <p class='field'>
                        <input class='button' type='submit' value='Send message'>
                    </p>
                </form>
            </div>
            <div class="cv-section"></div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
section {
    color: white;
    width: min(100ch, 100%);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-wrapper {
        width: min(100ch, 100%);
        margin-inline: auto;


    }
}
</style>