const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; //variables a, b and sum declared. Other variables undefined: bonus
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; //bonus assigned based on ternary operator result
    return bonus;
    };

calculateBonus(30, 25);