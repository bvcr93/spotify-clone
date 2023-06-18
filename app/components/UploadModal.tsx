"use client";
import React from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";

export default function UploadModal() {
  const uploadModal = useUploadModal();
  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }
  };
  return (
    <Modal
      title="upload modal title"
      description="desc"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      upload content
    </Modal>
  );
}
