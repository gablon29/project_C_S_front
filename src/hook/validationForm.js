export function validation(name, predica, fecha, amount, cb) {
  if (!name || !predica || !fecha || !amount) {
    return cb("ko");
  }
  return cb("ok");
}
