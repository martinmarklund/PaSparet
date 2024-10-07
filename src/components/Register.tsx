import { useForm } from "react-hook-form";

const Register: React.FC = () => {
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
