import { Box, Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import styled from "styled-components";

const FormGrid = styled(Grid)`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default function AddressForm() {
  return (
    <Box
      component="form"
      sx={{
        height: "90%",
        width: "50%",
        bgcolor: "lightblue",
        borderRadius: "30px",
        padding: "20px 30px",
        boxShadow: "20px 20px 12px rgba(0,0,0,0.1)",

        "@media (max-width: 600px)": {
          boxShadow: "none",
        },
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          height: "100%",
          width: "100%",
          bgcolor: "lightblue",
        }}
      >
        <FormGrid size={{ xs: 12, md: 8 }}>
          <FormLabel
            htmlFor="first-name"
            required
            sx={{
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            First name
          </FormLabel>
          <OutlinedInput
            id="first-name"
            name="first-name"
            type="name"
            placeholder="John"
            autoComplete="first name"
            required
            size="small"
            sx={{
              height: "50%",
              fontSize: { xs: "24px", md: "32px" },
              marginTop: "1rem",
            }}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 8 }}>
          <FormLabel
            htmlFor="last-name"
            required
            sx={{
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            Last name
          </FormLabel>
          <OutlinedInput
            id="last-name"
            name="last-name"
            type="last-name"
            placeholder="Snow"
            autoComplete="last name"
            required
            size="small"
            sx={{
              height: "50%",
              fontSize: { xs: "24px", md: "32px" },
              marginTop: "1rem",
            }}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel
            htmlFor="description"
            required
            sx={{
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            Description
          </FormLabel>
          <OutlinedInput
            id="description"
            name="description"
            type="text"
            placeholder="Can we help you?"
            required
            size="small"
            multiline // bật chế độ nhiều dòng
            minRows={4} // tối thiểu 4 dòng
            maxRows={8} // tối đa 8 dòng (tuỳ chọn)
            sx={{
              fontSize: "24px",
              mt: 1,
            }}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              height: "50%",
              fontSize: "24px",
              marginTop: "1rem",
            }}
          >
            Submit
          </Button>
        </FormGrid>
      </Grid>
    </Box>
  );
}
