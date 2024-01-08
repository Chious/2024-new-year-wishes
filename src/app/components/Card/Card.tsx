"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useApp } from "@/app/contexts/AppContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface CardProps {
  open: boolean;
  setOpen: Function;
}

type rawDataType = { id: string; name: string; content: string };

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Card({ open, setOpen }: CardProps) {
  const handleClose = () => setOpen(false);

  const { data, setData } = useApp();
  const [filterData, setFilterData] = useState({
    name: "Default",
    id: "Default",
    content: "Default",
  });

  // Initialize data, while loading into the page
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((item) => {
        setData(item);
      });

    console.log(data);
  }, []);

  const searchParams = useSearchParams();
  // Filter data
  useEffect(() => {
    if (data.length !== 0) {
      const id = searchParams?.get("id");
      const isInTheData = data.some((item: rawDataType) => item.id === id);
      const queryParam = isInTheData ? id : "default";
      const filter = data.filter(
        (item: rawDataType) => item.id === queryParam
      )[0];

      setFilterData(filter);
    }
  }, [data]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" sx={{ color: "black" }}>
            {`Message to ${filterData.name}:`}
          </Typography>
          <Typography
            sx={{ mt: 2, color: "black", height: "60vh", overflow: "scroll" }}
          >
            {filterData.content}
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            sx={{ color: "black", textAlign: "right" }}
          >{`Best,`}</Typography>
          <Typography
            variant="h6"
            component="h2"
            sx={{ color: "black", textAlign: "right" }}
          >
            Jia Sheng
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
