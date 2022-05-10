import { makeStyles } from "@material-ui/core";

export const StartupStyles = makeStyles({
  banner: {
    position: "absolute",
    minHeight: "100%",
    width: "425px",
    background: [
      "linear-gradient(180deg, rgba(58, 140, 255, 0.85), rgba(134, 185, 255, 0.8),rgba(134, 185, 255, 5), rgba(134, 185, 255, 5) ) repeat ",
      "url(https://s3-alpha-sig.figma.com/img/ee10/151b/52ab7cf6178dfd74c8dcb0a98303f43e?Expires=1652659200&Signature=BzOchQgz451Lkn9ZxV3F27k4dewMlDoinmIDT4ahBojRnKBLDHk42qleVKheZr8BePlugucSa6GVuIPGeIik-lqjgB-KLDchp6vXJlYtrvQKT-xl8zhXTJyKWEch-I851GzUpCUfD6Bx9hrAqYoz6BEdcEgs31rptopo2OdbMrQbnYI2r2v25voEh3hJ~nvK7MqLcxj2xS7fuLf2Q0LUi7oxVY6vIuGtmxpGC5RlR-LAic4tRRwz6nAiOuaoUxp98qbv9snuc-5Rak9MM8OjL3Vwwfh0X10NfFHGFkAIJgbYqLBqFySKTgPMMH6T-EotCu-n1KClvekUwIq3LdTCKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) no-repeat ",
    ],
  },
  bannerText: {
    position: "absolute",
    textAlign: "center",
    height: "80px",
    width: "70%",
    left: "15%",
    top: "43%",
    fontWeight: "400",
    fontSize: "26px",
    lineHeight: "40px",
    color: "#ffffff",
  },

  svg: {
    position: "absolute",
    top: "28.5%",
    left: "50%",
    marginLeft: "-7%",
  },

  switchPage: {
    position: "fixed",
    width: "336px",
    height: "54px",
    left: "70vw",
    bottom: "87.5vh",
    margin: "5px",
    padding: "0",
  },
  switchText: {
    position: "relative",
    height: "19px",
    right: "8%",
    top: "calc(50% - 19px / 2 + 1.38px)",
    fontSize: "14px",
    lineHeight: "19px",
    textAlign: "center",
    color: "#b0b0b0",
  },

  link: {
    textDecoration: "none",
  },

  topBtn: {
    color: "#3a8dff",
    position: "absolute",
    width: "140px",
    height: "54px",
    background: "#ffffff",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: "5px",
  },

  inputs: {
    position: "absolute",
    maxWidth: "380px",
    maxHeight: "424px",
    left: "50%",
    top: "30%",
  },

  inputHeader: {
    position: "relative",
    height: "40px",
    top: "calc(50% - 150px / 2 - 192px)",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "26px",
    lineHeight: "40px",
    marginBottom: "10px",
    color: "#000000",
  },

  input: {
    position: "relative",
    height: "66px",
    width: "380px",
    left: "0%",
    right: "0%",
    top: "12.26%",
    bottom: "72.17%",
    margin: "5px",
  },

  bottomBtn: {
    color: "#ffffff",
    position: "absolute",
    height: "56px",
    width: "160px",
    left: "33.75%",
    top: "100%",
    marginTop: "2px",
    background: "#3a8dff",
    borderRadius: "3px",
  },

  "@media (max-width: 1060px)": {
    banner: {
      width: "325px",
    },
    bannerText: {
      fontSize: "21.5px",
    },
    switchPage: {
      left: "65%",
    },
  },

  "@media (max-width: 900px)": {
    switchPage: {
      left: "50%",
    },

    input: {
      maxWidth: "280px",
    },

    bottomBtn: {
      left: "25.5%",
    },
  },

  "@media (max-width: 700px)": {
    banner: {
      display: "none",
    },

    switchPage: {
      left: "30%",
    },

    inputs: {
      left: "30%",
    },
    input: {
      height: "50px",
    },
    bottomBtn: {
      marginTop: "0px",
      top: "130%",
    },
  },

  "@media (max-width: 600px)": {
    switchPage: {
      left: "25%",
    },

    inputs: {
      left: "25%",
    },
  },

  "@media (max-width: 500px)": {
    switchPage: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      left: "32%",
      width: "150px",
    },

    topBtn: {
      fontSize: "13px",
    },
    switchText: {
      fontSize: "11px",
      top: "-5%",
      left: "1%",
      width: "140px",
    },

    input: {
      width: "200px",
    },

    bottomBtn: {
      left: "12%",
    },
  },
});
