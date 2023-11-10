"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function Card({ open, setOpen }: CardProps) {
  const handleClose = () => setOpen(false);

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
            Message to YOU:
          </Typography>
          <Typography
            sx={{ mt: 2, color: "black", height: "60vh", overflow: "scroll" }}
          >
            {`JERUSALEM (AP) — Fistfights break out in bread lines. Residents wait
            hours for a gallon of brackish water that makes them sick. Scabies,
            diarrhea and respiratory infections rip through overcrowded
            shelters. And some families have to choose who eats. “My kids are
            crying because they are hungry and tired and can’t use the
            bathroom,” said Suzan Wahidi, an aid worker and mother of five at a
            U.N. shelter in the central town of Deir al-Balah, where hundreds of
            people share a single toilet. “I have nothing for them.” With the
            Israel-Hamas war in its second month and more than 10,000 people
            killed in Gaza, trapped civilians are struggling to survive without
            electricity or running water. Palestinians who managed to flee
            Israel’s ground invasion in northern Gaza now encounter scarcity of
            food and medicine in the south, and there is no end in sight to the
            war sparked by Hamas’ deadly Oct. 7 attack.`}
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
