import { OnSuccess } from "../Axios/OnSuccess";

useMutation(someFn, {
  onSuccess: (res) => {
    OnSuccess(res);
  },
});
