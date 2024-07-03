import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Trash2, RefreshCw, Pencil } from "lucide-react";
import { useRegenerateApiKeyAndSecret } from "../api/mutations";
import toast from "react-hot-toast";
import ToastMessage from "./ToastMessage";

export function DeleteModal(props) {
  const [openModal, setOpenModal] = useState(false);
  const [deleteCondition, setDeleteCondition] = useState("");

  function handleOpen() {
    setDeleteCondition("");
    setOpenModal(true);
  }

  return (
    <>
      <button
        title="Delete Project"
        className="ml-3 border-none bg-transparent p-0"
        onClick={handleOpen}
      >
        <Trash2 className="size-5 text-black hover:text-red-600" />
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        position="top-center"
        className="backdrop-blur-[2px]"
        dismissible
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-600" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Type{" "}
              <span className="font-bold">
                Delete {"\n" + props.projectName}
              </span>{" "}
              to Delete
            </h3>
            <TextInput
              className="mb-5 text-center text-lg font-normal text-gray-500"
              placeholder={`Delete ${props.projectName}`}
              onChange={(event) => setDeleteCondition(event.target.value)}
            />
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => setOpenModal(false)}
                disabled={
                  deleteCondition == `Delete ${props.projectName}`
                    ? false
                    : true
                }
              >
                Delete Project
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function RefreshModal(props) {
  const [openModal, setOpenModal] = useState(false);
  const { mutate, isPending } = useRegenerateApiKeyAndSecret();
  console.log(isPending);

  return (
    <>
      <button
        title="Rotate API/Secret"
        className="ml-3 border-none bg-transparent p-0"
        onClick={() => setOpenModal(true)}
      >
        <RefreshCw className="size-5 text-black hover:text-red-600" />
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        position="top-center"
        className="backdrop-blur-[2px]"
        dismissible={!isPending}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <RefreshCw className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-600" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to{" "}
              <span className="font-bold">
                Rotate API-Key and Secret{" "}
                <span className="font-normal">for</span>{" "}
                {"\n" + props.projectName}?
              </span>
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                disabled={isPending}
                color="failure"
                onClick={() => {
                  mutate(props.projectId, {
                    onSettled: () => {
                      setOpenModal(false);
                      // Tailwind Example
                      toast.custom((t) => (
                        <ToastMessage
                          message="API key rotated successfully. Please update your applications with the new key."
                          t={t}
                        />
                      ));
                    },
                  });
                }}
              >
                Rotate
              </Button>
              <Button
                disabled={isPending}
                color="gray"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

function CustomToast() {
  return (
    <div className={`rounded-full bg-white px-6 py-4 shadow-md`}>
      Hello TailwindCSS! 👋
    </div>
  );
}

export function EditModal(props) {
  const [openModal, setOpenModal] = useState(false);
  const [newName, setNewName] = useState(props.projectName);

  function onCloseModal() {
    setOpenModal(false);
    setNewName(props.projectName);
  }
  return (
    <>
      <button
        title="Edit Name"
        onClick={() => setOpenModal(true)}
        className="ml-3 border-none bg-transparent p-0"
      >
        <Pencil className="size-5 text-black hover:text-purple-700" />
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        position="top-center"
        className="backdrop-blur-[2px]"
        dismissible
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <Pencil className="mx-auto mb-4 h-14 w-14 text-purple-700 dark:text-gray-600" />
            <h3 className="font-regular mb-5 text-xl text-gray-500 dark:text-white">
              Name:{" "}
              <span className="font-bold">
                {newName ? newName : props.projectName}
              </span>
            </h3>
            <div className="max-w-30 mb-5">
              <TextInput
                id="newName"
                placeholder={props.projectName}
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                required
              />
            </div>
            <div className="flex justify-center gap-4">
              <Button color="purple" onClick={onCloseModal}>
                Edit
              </Button>
              <Button color="gray" onClick={onCloseModal}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
