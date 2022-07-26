<template>
  <div>
    <form id="my-form" action="https://formspree.io/f/mknypyer" method="POST">
      <label style="color: #fdfcfd">Email:</label> <br />
      <input class="field" type="email" name="email" /> <br />
      <label style="color: #fdfcfd">Запись на консультацию:</label> <br />
      <textarea class="field" type="text" name="message"></textarea>
      <input type="submit" class="field" id="my-form-button" />
      <p id="my-form-status"></p>
      <br />
    </form>
  </div>
</template>
