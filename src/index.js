require("dotenv").config();

const {
  Client,
  Events,
  GatewayIntentBits,
  EmbedBuilder,
  SlashCommandBuilder,
  PermissionsBitField,
  Permissions,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.ClientReady, (x) => {
  console.log(`${x.user.tag} is ready!`);
  client.user.setActivity("I'm not paid enough for this.");

  const ping = new SlashCommandBuilder()
    .setName(`ping`)
    .setDescription(`This is a ping command!`);

  const aden = new SlashCommandBuilder()
    .setName(`aden`)
    .setDescription(
      `Select this place if you are adding an item there for uncharted events.`
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("peanuts")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of peanuts.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("meat")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("tin")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("carpets")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("firearms")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("porcelain")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("dye")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("cloth")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("leather")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("alcohol")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("fish")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("pearls")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("diamonds")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("gold")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("agate")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("bananas")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("paper")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("tea_leaves")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("tobacco")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("medicine")
        .setDescription(`A type of item in uncharted events.`)
        .addIntegerOption((option) =>
          option
            .setName(`percentage`)
            .setDescription(`Percentage of the value of meat.`)
            .setMaxValue(110)
            .setMinValue(80)
            .setRequired(true)
        )
    );

  client.application.commands.create(ping, process.env.INC_SERVER);
  client.application.commands.create(aden, process.env.INC_SERVER);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }
  if (interaction.commandName === "aden") {
    if (!interaction.options.getSubcommand()) return;

    const sub_name = string_Prettier(interaction.options.getSubcommand());
    const command_name = capitalizeFLetter(interaction.commandName);
    const interger = interaction.options.getInteger("percentage");

    if (sub_name === `peanuts`) {
      /*Add integer to database here*/
    }
    if (sub_name === `meat`) {
      /*Add integer to database here*/
    }
    if (sub_name === `tin`) {
      /*Add integer to database here*/
    }
    if (sub_name === `carpets`) {
      /*Add integer to database here*/
    }
    if (sub_name === `firearms`) {
      /*Add integer to database here*/
    }
    if (sub_name === `porcelain`) {
      /*Add integer to database here*/
    }
    if (sub_name === `dye`) {
      /*Add integer to database here*/
    }
    if (sub_name === `cloth`) {
      /*Add integer to database here*/
    }
    if (sub_name === `leather`) {
      /*Add integer to database here*/
    }
    if (sub_name === `alcohol`) {
      /*Add integer to database here*/
    }
    if (sub_name === `fish`) {
      /*Add integer to database here*/
    }
    if (sub_name === `pearls`) {
      /*Add integer to database here*/
    }
    if (sub_name === `diamonds`) {
      /*Add integer to database here*/
    }
    if (sub_name === `gold`) {
      /*Add integer to database here*/
    }
    if (sub_name === `agate`) {
      /*Add integer to database here*/
    }
    if (sub_name === `bananas`) {
      /*Add integer to database here*/
    }
    if (sub_name === `paper`) {
      /*Add integer to database here*/
    }
    if (sub_name === `tea_leaves`) {
      /*Add integer to database here*/
    }
    if (sub_name === `tobacco`) {
      /*Add integer to database here*/
    }
    if (sub_name === `medicine`) {
      /*Add integer to database here*/
    }
    interaction.reply(
      `${sub_name} (${interger}%) from ${command_name} has been added.`
    );
  }
});

function capitalizeFLetter(words) {
  let string = words.replace(/^./, words[0].toUpperCase());
  return string;
}

function string_Prettier(words) {
  let new_string = words.replace(/_/g, " ").split(" ");
  for (let i = 0; i < new_string.length; i++) {
    new_string[i] = new_string[i][0].toUpperCase() + new_string[i].substr(1);
  }
  return new_string.join(" ");
}

client.login(process.env.TOKEN);

/*peanuts,
  meat,
  tin,
  carpets,
  firearms,
  porcelain,
  dye,
  cloth,
  leather,
  alcohol,
  fish,
  pearls,
  diamonds,
  gold,
  agate,
  bananas,
  paper,
  tea_leaves,
  tobacco,
  medicine*/
var aden,
  alexandria,
  amsterdam,
  athens,
  brunei,
  basrah,
  boston,
  buenos_aires,
  calicut,
  cape_town,
  cayenne,
  ceylon,
  copenhagen,
  darwin,
  edo,
  hamburg,
  hangzhou,
  istanbul,
  jamaica,
  kolkata,
  las_palmas,
  libson,
  london,
  luanda,
  manila,
  malacca,
  mozambique,
  nantes,
  nassau,
  panama_city,
  pinjarra,
  quanzhou,
  rio_de_janeiro,
  santo_domingo,
  st_georges,
  seville,
  tunis,
  venice;
