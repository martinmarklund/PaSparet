import { useForm } from "react-hook-form";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Login</button>"
      </form>
    </div>
  );
};

export default Login;
