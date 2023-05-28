<script setup lang='ts'>
import baseButton from './button.vue';
</script>

<template>
    <section>
        <h1 id="contact-title">Get in touch with me</h1>
        <div class="section-wrapper">
            <div class="contact-form">
                <form action='' class='form'>
                    <input placeholder="Name" class='form-element' id='name' name='name' required type='text'>
                    <input placeholder="Email" class='form-element' id='email' name='email' required type='email'>
                    <textarea placeholder="Message" class='form-element' cols='50' id='message' name='message' required
                        rows='4'></textarea>
                </form>
                <baseButton>Get in touch!</baseButton>
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

        .contact-form {
            form {
                display: flex;
                flex-direction: column;
            }

            .form-element {
                background-color: transparent;
                border-top: none;
                border-left: none;
                border-right: none;
                border-bottom: 2px solid white;
                margin: 2em;
                transition: 0.5s;
                color: white;

                &::placeholder {
                    color: white;
                    font-family: 'Courier New', Courier, monospace;

                }

                &:focus {
                    outline: none !important;
                    border-bottom: 2px solid #6562cf;
                }
            }
        }

    }
}
</style>