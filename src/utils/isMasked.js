const isMasked = (innloggingsstatus, sikkerhetsnivaa) => {
  return sikkerhetsnivaa === 4 && innloggingsstatus === 3;
};

export default isMasked;
