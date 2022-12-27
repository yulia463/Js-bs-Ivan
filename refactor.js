const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = [];
for (let i = 0; i < employers.length; i++) {
    if (employers[i].length > 0) {
        const newName = employersNames[i].toLowerCase().trim()
        employersNames.push(newName);
    }
}

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0) {
    const everyCash = Array.prototype.slice.call(arguments);
    let total = own;
    for (let i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}

const money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner} , director: ${director} . Our budget: ${cash} . And our employers: ${emp}`)
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with  ${sponsors.eu[0]} . It's a huge risk.`);
}

makeBusiness.apply(null, ['Sam', null, money, employersNames]);