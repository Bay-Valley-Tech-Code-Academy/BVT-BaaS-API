import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Trash2 } from "lucide-react";

export function DeleteModal(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="ml-3 border-none bg-transparent p-0"
        onClick={() => setOpenModal(true)}
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
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-600" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to{" "}
              <span className="font-bold">
                Delete {"\n" + props.projectName}?
              </span>
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
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

export default {
  DeleteModal,
};
