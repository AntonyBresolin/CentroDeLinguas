const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use("/css", express.static("css"));
app.use("/js", express.static("js"));
app.use("/img", express.static("img"));

const details = {
  service: "gmail",
  auth: {
    user: "antonybresolin@gmail.com",
    pass: "nmprrevlzcorqlzx",
  },
  port: 465,
  host: "smtp.gmail.com",
};

const transporter = nodemailer.createTransport(details);

//dar request no email e coletar dados
app.get("/process_get", function (req, res) {
  response = {
    nome: req.query.nome,
    email: req.query.email,
    telefone: req.query.telefone,
    mensagem: req.query.mensagem,
    res
  };
  mailData(
    response.nome,
    response.email,
    response.telefone,
    response.mensagem
  );
});

function mailData(nome, email, telefone, mensagem, res) {
  var mailData = {
    from: "antonybresolin@gmail.com",
    to: "antonybresolin1@gmail.com",
    subject: "Contato",
    text: mensagem,
    html:
      "<h1> Estou te contatando por meio do site de portfolio </h1> <p> Nome: " +
      nome +
      " </p> <p> Email: " +
      email +
      " </p> <p> telefone: " +
      telefone +
      " </p> <br> <h2> Mensagem: </h2> <p> " +
      mensagem +
      " </p>",
  };
  enviarEmail(mailData, res);
}

function enviarEmail(mensagem, res) {
  transporter.sendMail(mensagem, function (error, info) {
    if (error) {
      console.log(error);
      res.send("Erro ao enviar o email.");
    } else {
      console.log("Email enviado: " + info.response);
      res.send("Email enviado com sucesso!");
    }
  });
}

