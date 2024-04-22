// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// const supabase = createClient(supabaseUrl, supabaseAnonKey);
// export default supabase;

// Pra que eu pudesse rodar o front sem depender, por enquanto da conexão do back com o 
// supabase, deixei o código original acima comentado e pedi pro chat me ajudar 
// assim, o cliente Supabase só será criado se as variáveis de ambiente REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY estiverem definidas.
let supabase = null;

if (process.env.REACT_APP_SUPABASE_URL && process.env.REACT_APP_SUPABASE_ANON_KEY) {
    const { createClient } = require("@supabase/supabase-js");

    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

    supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
    console.error("Variáveis de ambiente do Supabase não estão definidas. O cliente Supabase não será criado.");
}

export default supabase;



