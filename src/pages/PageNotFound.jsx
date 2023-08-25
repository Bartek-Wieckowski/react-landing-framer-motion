import { useState, useEffect } from "react";
import AnimatedButton from "../components/AnimatedButton";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

export default function PageNotFound() {
  const [modalConfig, setModalConfig] = useState(null);

  useEffect(() => {
    setModalConfig({
      isOpen: true,
      buttonText: "Close",
      contentText: "Sorry such a site does not exist....",
    });
  }, []); 

  function handleCloseModal() {
    setModalConfig(null);
  }

  return (
    <div className="page-not-found-wrapper">
      <Link to="/">
        <AnimatedButton>Homepage</AnimatedButton>
      </Link>
      {modalConfig && (
        <Modal
          isOpen={modalConfig.isOpen}
          onClose={handleCloseModal}
          buttonText={modalConfig.buttonText}
          contentText={modalConfig.contentText}
        />
      )}
    </div>
  );
}
