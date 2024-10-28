const supabase = require("../supabaseClient");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const { data, error } = response;

    if (error) {
      throw error;
    }

    res.status(200).json(response);
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.signOut = async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.passwordReset = async (req, res) => {
  const { email } = req.body;
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/senha",
  });
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: "Password reset email sent" });
};
