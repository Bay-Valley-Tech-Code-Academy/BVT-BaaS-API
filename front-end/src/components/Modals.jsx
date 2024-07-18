import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Trash2, RefreshCw, Pencil, Loader, Plus } from "lucide-react";
import {
  useRegenerateApiKeyAndSecret,
  useUpdateProjectName,
} from "../api/mutations";
import toast from "react-hot-toast";
import ToastMessage from "./ToastMessage";

export function CreateProjectModal({
  open,
  onOpenChange,
  onCreateProject,
  isPending,
}) {
  const [projectName, setProjectName] = useState("");
  return (
    <Modal
      show={open}
      size="md"
      onClose={onOpenChange}
      popup
      position="top-center"
      className="backdrop-blur-[2px]"
      dismissible={!isPending}
    >
      <Modal.Body className="p-4">
        <div className="">
          <h3 className="text-lg font-semibold text-gray-700">
            Create Project
          </h3>
          <div className="mb-4 space-y-1">
            <label className="text-sm text-gray-600">Project Name</label>
            <TextInput
              disabled={isPending}
              className="mb-5 text-center text-lg font-normal text-gray-500"
              onChange={(e) => setProjectName(e.target.value.trim())}
            />
          </div>
          <div className="flex justify-center gap-4">
            <Button disabled={isPending} color="gray" onClick={onOpenChange}>
              Cancel
            </Button>
            <Button
              disabled={projectName === "" || isPending}
              className="flex items-center justify-center bg-purple-500 text-white"
              onClick={() => onCreateProject(projectName)}
            >
              <span className={`${isPending ? "invisible" : ""}`}>Confirm</span>
              {isPending && <Loader className="size-4 animate-spin" />}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

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

  function handleMutation() {
    mutate(props.projectId, {
      onSuccess: () => {
        toast.custom((t) => (
          <ToastMessage
            message="API key rotated successfully. Please update your applications with the new key."
            t={t}
          />
        ));
      },
      onError: () => {
        toast.custom((t) => (
          <ToastMessage
            message="Failed to rotate keys.  Please try again."
            t={t}
          />
        ));
      },
      onSettled: () => {
        setOpenModal(false);
      },
    });
  }

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
                onClick={handleMutation}
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

export function EditModal(props) {
  const [openModal, setOpenModal] = useState(false);
  const [newName, setNewName] = useState(props.projectName);
  const { mutate, isPending } = useUpdateProjectName();

  function handleMutation() {
    mutate(
      {
        projectId: props.projectId,
        projectName: newName,
      },
      {
        onSuccess: () => {
          toast.custom((t) => (
            <ToastMessage
              t={t}
              message={`Project has successfully been renamed`}
              variant="success"
            />
          ));
        },
        onError: () => {
          toast((t) => (
            <ToastMessage
              t={t}
              message="Failed to update project name. Please try again."
              variant="error"
            />
          ));
          setNewName(props.projectName);
        },
        onSettled: () => {
          setOpenModal(false);
        },
      },
    );
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
        onClose={() => setOpenModal(false)}
        popup
        position="top-center"
        className="backdrop-blur-[2px]"
        dismissible={!isPending}
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
                disabled={isPending}
              />
            </div>
            <div className="flex justify-center gap-4">
              <Button
                disabled={newName.trim().length === 0 || isPending}
                color="purple"
                className="relative"
                onClick={handleMutation}
              >
                {isPending && (
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Loader className="animate-spin" size={16} />
                  </span>
                )}
                <span className={isPending ? "invisible" : ""}>Edit</span>
              </Button>
              <Button
                disabled={isPending}
                color="gray"
                onClick={() => {
                  setOpenModal(false);
                  setNewName(props.projectName);
                }}
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
