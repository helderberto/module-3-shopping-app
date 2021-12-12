export default function ServerErrorMessage({ error }) {
  if (!error) {
    return null;
  }
  return <h4 data-testid="server-error">Server is down.</h4>;
}
