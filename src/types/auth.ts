type LoginProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

interface ErrorMessage {
  message: string;
}

export type { LoginProps, SignUpProps, ErrorMessage };
