<template>
  <div>
    <div
      id="landingPage"
      class="flex flex-col justify-center items-center w-full min-h-screen p-3"
    >
      <div
        class="flex flex-col justify-center items-center bg-white p-2 xs:p-5 md:p-10 xl:p-16 rounded-xl shadow-lg"
      >
        <!-- Logo -->
        <img
          src="../assets/logo.png"
          alt="Friendship Bubble Logo"
          class="rounded-full max-h-24 xs:max-h-32 md:max-h-44 xl:max-h-64 mb-6"
        />
        <!-- Titles -->
        <p class="text-base xs:text-lg md:text-xl xl:text-3xl text-center">
          Welkom bij
        </p>
        <h1
          class="text-lg xs:text-2xl md:text-4xl xl:text-6xl font-semibold text-center"
        >
          Friendship Bubble!
        </h1>
        <p class="text-xs xs:text-base md:text-lg text-center">
          We zijn blij dat je er bent.
        </p>
        <!-- Social buttons -->
        <div class="flex space-x-2 mt-2">
          <!-- Discord button -->
          <a
            href="https://discord.gg/PC5cDtXUSg"
            target="_blank"
            style="color: #5865f2"
            ><font-awesome-icon :icon="['fab', 'discord']" size="lg"
          /></a>
          <!-- Instagram button -->
          <a
            href="https://www.instagram.com/friendshipbubble"
            target="_blank"
            style="color: #dd2a7b"
            ><font-awesome-icon :icon="['fab', 'instagram']" size="lg"
          /></a>
        </div>
      </div>

      <!-- Down button -->
      <a
        href="#"
        v-scroll-to="'#sectionInfo'"
        class="bg-white rounded-full mt-12 w-8 md:w-12 h-8 md:h-12 flex justify-center items-center animate-bounce transition ease-in-out duration-1000"
      >
        <font-awesome-icon :icon="['fas', 'arrow-down']"></font-awesome-icon>
      </a>
    </div>

    <!-- Info section -->
    <div
      id="sectionInfo"
      class="flex flex-col items-center py-12 px-3 bg-blue-300"
    >
      <h3 class="font-semibold text-center text-white text-3xl">
        Work in progress, kom binnenkort nog eens kijken!
      </h3>
      <!-- <h2 class="text-4xl text-center text-white font-semibold">Informatie</h2>
      <p class="text-xl text-center text-white">
        Informatie over Friendship Bubble!
      </p> -->
      <!-- <div class="container mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto mt-8"
        >
          <div class="bg-white p-4 rounded-xl shadow-lg">
            <h3 class="text-2xl text-center font-semibold text-blue-400">
              Spelletjes
            </h3>
            <p class="text-justify">
              In de Friendship Bubble worden veel spelletjes gespeeld met
              elkaar. We hebben hiervoor op onze Discord speciale categorieën
              gemaakt.<br />Enkele populaire spellen binnen de community zijn
              DnD (Dungeons and Dragons) en Minecraft. Zo nu en dan wordt er ook
              eens Catan gespeeld, maar met jou erbij misschien zelfs vaker!
            </p>
            <br />
            <p class="text-justify">
              Wil jij ook in de Minecraft server? Kom dan in onze Discord, en
              stuur
              <a
                href="https://discord.com/users/268091310773239809"
                target="_blank"
                class="text-blue-500"
                >Dik hij/hem</a
              >
              een berichtje, hij zal je dan toevoegen aan de whitelist!<br />Wil
              je alvast de server toevoegen aan je lijst? Dat kan! Het server
              adres is <span class="font-mono">mc.friendshipbubble.nl</span>.
            </p>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-lg">
            <h3 class="text-2xl text-center font-semibold text-blue-400">
              Gezelligheid
            </h3>
            <p class="text-justify">
              Er is altijd wel iets gaande in de Friendship Bubble, praat je
              graag gezellig mee zonder verplichtingen? Dan ben je aan het
              juiste adres. We hebben maar liefst 4 chatkanalen waarin allerlei
              topics behandeld worden. Daarnaast zijn we een trigger-safe
              community. Dat houdt in dat we berichten prefixen met een "TW: ",
              zo kan jij een veilige, trigger-vrije tijd doorbrengen bij ons!<br />
              Kom zeker eens een kijkje nemen!
            </p>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-lg">
            <h3 class="text-2xl text-center font-semibold text-blue-400">
              Steun
            </h3>
            <p class="text-justify">
              Heb jij een beperking of ben je ziek en zoek jij een warme
              community? Dan ben je zeker aan het juiste adres. Sterker nog, wij
              hebben kanalen aangemaakt waarin we elkaar kunnen steunen en over
              onze problemen kunnen praten. Je kan hier ook advies van anderen
              vinden bijvoorbeeld.<br />Als dit je erg aanspreekt, dan moet je
              echt op onze Discord komen!
            </p>
          </div>
        </div>
      </div> -->
    </div>
    <!-- Footer -->
    <div class="py-12 px-3 bg-gray-800 text-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <p class="font-semibold">Algemene informatie</p>
            <p>
              Friendship Bubble is een initiatief van
              <a
                href="https://linktr.ee/laurigiepmans"
                target="_blank"
                class="text-blue-500"
                >Lauri Giepmans</a
              >
              in samenwerking met enkele goede vrienden.
            </p>
            <p>&copy; Copyright 2021 - Friendship Bubble</p>
          </div>
          <div></div>
          <div>
            <p class="font-semibold">Ontwikkelaar</p>
            <p>
              Deze website is gemaakt door
              <a
                href="https://jonasclaes.be/"
                target="_blank"
                class="text-blue-500"
                >Jonas Claes</a
              >.<br />Design in samenspraak met de Friendship Bubble community.
              <br />Hosting wordt gedaan door
              <a
                href="https://www.netlify.com/"
                target="_blank"
                class="text-blue-500"
                >Netlify</a
              >.<br />Deze website is volledig open-source en gemaakt met Vue 3,
              code kan je
              <a
                href="https://github.com/friendshipbubble/friendshipbubble"
                target="_blank"
                class="text-blue-500"
                >hier</a
              >
              vinden.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {}
</script>

<style scoped>
#landingPage {
  background: rgb(244, 211, 219);
  background: radial-gradient(
    circle,
    rgba(244, 211, 219, 1) 0%,
    rgba(93, 97, 121, 1) 69%
  );
}
</style>
