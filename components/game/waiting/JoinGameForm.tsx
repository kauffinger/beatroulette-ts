import { ErrorMessage, Form, Formik } from "formik";
import Link from "next/link";
import { showNotification } from "@mantine/notifications";
import * as Yup from "yup";
import { Router } from "next/router";

import { joinGameWithPassword } from "../../../lib/functions";
import AppButton from "../../ui/AppButton";

interface Props {
  gameId: string;
  router: Router;
}

// Todo: Correctly type gameId, maybe convert Formik to MantineForm

function JoinGameForm({ gameId, router }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-accent text-4xl uppercase font-bold">
        You are not part of this game
      </p>

      <Formik
        initialValues={{ password: "" }}
        validationSchema={Yup.object().shape({
          password: Yup.string().min(1).max(255).required(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await joinGameWithPassword({
            gameId: gameId,
            password: values.password,
          });
          if (res.data.joined) {
            showNotification({
              title: "Joined game",
              message: res.data.info,
              color: "green",
            });
            router.reload();
            return;
          }
          showNotification({
            title: "Failed to join game",
            message: res.data.info,
            color: "red",
          });
        }}
      >
        {({ isSubmitting, setFieldValue, validateField }) => (
          <Form className="flex flex-col items-center justify-center py-8 px-4 border-accent border-2 rounded-xl mt-4">
            <div className="flex flex-col items-center justify-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200"
              >
                Enter this game&apos;s password:
              </label>
              <div className="mt-1 flex items-center">
                <input
                  name="password"
                  type="password"
                  onChange={(e) => {
                    setFieldValue("password", e.currentTarget.value);
                  }}
                  className="my-1 bg-rgray-800 focus:ring-red-500 focus:border-red-500 block shadow-sm text-sm border-gray-600 rounded-md text-white"
                />
              </div>
            </div>

            <ErrorMessage
              name="file"
              component="div"
              className="text-sm text-right font-medium text-accent"
            ></ErrorMessage>

            <div className="pt-4 text-right">
              <AppButton
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rgray-600 hover:bg-rgray-700 disabled:bg-rgray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition"
              >
                Join Game
              </AppButton>
            </div>
          </Form>
        )}
      </Formik>
      <Link href="/">
        <a>
          <AppButton className="mt-4">Take me back</AppButton>
        </a>
      </Link>
    </div>
  );
}

export default JoinGameForm;
