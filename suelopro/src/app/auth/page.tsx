'user cliente'

import {supabase} from "@/lib/supabase";
import { error } from "console";

export default function Login{
  const login = async () =>
  try {

    let {data, error} = await supabase
      .auth
      .sigInWithPassword({
        email:'rhavitony@gmail.com'

      })
  }
  return <div>Login page</div>
}