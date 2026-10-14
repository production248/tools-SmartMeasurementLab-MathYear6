(() => {
  "use strict";

  const requestedYear = Number(new URLSearchParams(window.location.search).get("grade"));
  const configuredYearValue = Number(window.MEASUREMENT_LAB_GRADE);
  const configuredYear = [1, 2, 3, 4, 5, 6].includes(configuredYearValue)
    ? configuredYearValue
    : ([1, 2, 3, 4, 5, 6].includes(requestedYear) ? requestedYear : null);

  const translations = {
    bm: {
      appTitle: "Jom Teroka Ukuran!", appSubtitle: "Ukur, banding dan lihat hubungan unit.",
      soundOn: "Bunyi: Buka", soundOff: "Bunyi: Tutup",
      modeLength: "Panjang", modeMass: "Jisim", modeCapacity: "Isi Padu Cecair", modeConvert: "Tukar Unit",
      chooseActivity: "Pilih aktiviti", level: "Tahap", levelD1: "D1", levelD2: "D2", levelD3: "D3",
      levelD4: "D4", levelD5: "D5", levelD6: "D6", activity: "Aktiviti", category: "Jenis ukuran",
      teacherMode: "Soalan guru", customQuestion: "Bina soalan sendiri", newQuestion: "Cuba soalan lain",
      yourTask: "Mari cuba!", reset: "Mula semula", check: "Semak", next: "Soalan seterusnya",
      cancel: "Batal", useQuestion: "Guna soalan ini", value: "Nilai", valueA: "Nilai A", valueB: "Nilai B",
      unit: "Unit", fromUnit: "Daripada unit", toUnit: "Kepada unit",
      activities: { measure: "Ukur dengan alat", compare: "Bandingkan", balance: "Seimbangkan", read: "Baca sukatan" },
      prompts: {
        length: "Ukur atau bandingkan panjang objek.", mass: "Gunakan neraca untuk memahami jisim.",
        capacity: "Perhatikan aras cecair di dalam bekas.", convert: "Gunakan jambatan unit untuk menukar nilai."
      },
      howTo: {
        length: "Lihat titik mula dan hujung objek sebelum memilih jawapan.",
        mass: "Pilih pemberat dan lihat arah neraca bergerak.",
        capacity: "Baca aras air pada senggatan bekas.",
        convert: "Lihat hubungan dua unit, kemudian masukkan jawapan."
      },
      questions: {
        lengthMeasure: "Berapakah panjang objek ini?", longer: "Objek manakah lebih panjang?", shorter: "Objek manakah lebih pendek?",
        massBalance: "Pemberat manakah dapat menyeimbangkan neraca?", heavier: "Yang manakah lebih berat?", lighter: "Yang manakah lebih ringan?",
        capacityRead: "Berapakah isi padu cecair ini?", more: "Bekas manakah mengandungi lebih banyak?", less: "Bekas manakah mengandungi lebih sedikit?",
        convert: "Tukarkan nilai ini."
      },
      object: "Objek", mysteryMass: "Jisim misteri", chooseWeight: "Pilih pemberat", container: "Bekas", blocks: "blok", cups: "cawan", units: "unit",
      objectA: "Objek A", objectB: "Objek B", containerA: "Bekas A", containerB: "Bekas B",
      ready: "Pilih jawapan selepas memerhatikan alat ukuran.", readyConvert: "Masukkan nilai yang sesuai.",
      chooseFirst: "Pilih satu jawapan dahulu.", enterFirst: "Masukkan jawapan dahulu.", correct: "Betul!",
      wrong: "Belum tepat. Perhatikan senggatan dan unit sekali lagi.",
      wrongBalanceLow: "Terlalu ringan. Neraca masih condong ke arah objek.",
      wrongBalanceHigh: "Terlalu berat. Neraca condong ke arah pemberat.",
      equivalence: "Hubungan unit", equals: "bersamaan", teacherIntro: "Masukkan nilai untuk aktiviti semasa.",
      invalid: "Masukkan nilai yang sah dalam julat 0.01 hingga 10,000,000.", unequal: "Nilai A dan B mestilah berbeza.",
      differentUnits: "Pilih dua unit yang berlainan dalam kategori yang sama.",
      steps: ["Lihat alat ukuran", "Pilih jawapan", "Semak dan faham"],
      convertSteps: ["Kenal pasti unit", "Lihat hubungan", "Masukkan jawapan"]
    },
    zh: {
      appTitle: "一起来探索测量！", appSubtitle: "测量、比较，看懂单位之间的关系。",
      soundOn: "声音：开", soundOff: "声音：关",
      modeLength: "长度", modeMass: "质量", modeCapacity: "液体体积", modeConvert: "单位换算",
      chooseActivity: "选择活动", level: "程度", levelD1: "一年级", levelD2: "二年级", levelD3: "三年级",
      levelD4: "四年级", levelD5: "五年级", levelD6: "六年级", activity: "活动", category: "测量类型",
      teacherMode: "老师出题", customQuestion: "自订题目", newQuestion: "换一道题",
      yourTask: "试试看！", reset: "重新开始", check: "检查", next: "下一题",
      cancel: "取消", useQuestion: "使用这道题", value: "数值", valueA: "数值 A", valueB: "数值 B",
      unit: "单位", fromUnit: "原来的单位", toUnit: "换成的单位",
      activities: { measure: "使用工具测量", compare: "比较", balance: "平衡天平", read: "读取刻度" },
      prompts: {
        length: "测量或比较物体的长度。", mass: "利用天平理解物体的质量。",
        capacity: "观察容器里的液面和刻度。", convert: "利用单位桥换算数值。"
      },
      howTo: {
        length: "先观察物体的起点和终点，再选择答案。", mass: "选择砝码，观察天平向哪一边倾斜。",
        capacity: "根据容器的刻度读取液面。", convert: "观察两个单位的关系，再输入答案。"
      },
      questions: {
        lengthMeasure: "这个物体有多长？", longer: "哪一个物体比较长？", shorter: "哪一个物体比较短？",
        massBalance: "哪一个砝码能让天平平衡？", heavier: "哪一个比较重？", lighter: "哪一个比较轻？",
        capacityRead: "液体的体积是多少？", more: "哪一个容器的液体比较多？", less: "哪一个容器的液体比较少？",
        convert: "换算这个数值。"
      },
      object: "物体", mysteryMass: "神秘物体", chooseWeight: "选择砝码", container: "容器", blocks: "个方块", cups: "杯", units: "个单位",
      objectA: "物体 A", objectB: "物体 B", containerA: "容器 A", containerB: "容器 B",
      ready: "观察测量工具后选择答案。", readyConvert: "输入正确的数值。",
      chooseFirst: "请先选择一个答案。", enterFirst: "请先输入答案。", correct: "答对了！",
      wrong: "还不正确，请再观察刻度和单位。",
      wrongBalanceLow: "太轻了，天平仍然倒向物体。", wrongBalanceHigh: "太重了，天平倒向砝码。",
      equivalence: "单位关系", equals: "等于", teacherIntro: "为目前的活动输入题目数值。",
      invalid: "请输入 0.01 至 10,000,000 以内的有效数值。", unequal: "A 和 B 的数值必须不同。",
      differentUnits: "请选择同一类型中两个不同的单位。",
      steps: ["观察测量工具", "选择答案", "检查并理解"],
      convertSteps: ["辨认单位", "观察单位关系", "输入答案"]
    },
    en: {
      appTitle: "Let's Explore Measurement!", appSubtitle: "Measure, compare and see how units are connected.",
      soundOn: "Sound: On", soundOff: "Sound: Off",
      modeLength: "Length", modeMass: "Mass", modeCapacity: "Liquid Volume", modeConvert: "Convert Units",
      chooseActivity: "Choose an activity", level: "Level", levelD1: "Year 1", levelD2: "Year 2", levelD3: "Year 3",
      levelD4: "Year 4", levelD5: "Year 5", levelD6: "Year 6", activity: "Activity", category: "Measurement type",
      teacherMode: "Teacher question", customQuestion: "Make your own question", newQuestion: "Try another question",
      yourTask: "Let's try!", reset: "Start again", check: "Check", next: "Next question",
      cancel: "Cancel", useQuestion: "Use this question", value: "Value", valueA: "Value A", valueB: "Value B",
      unit: "Unit", fromUnit: "From unit", toUnit: "To unit",
      activities: { measure: "Measure with a tool", compare: "Compare", balance: "Balance the scale", read: "Read the scale" },
      prompts: {
        length: "Measure or compare the length of objects.", mass: "Use a balance scale to understand mass.",
        capacity: "Observe the liquid level and container markings.", convert: "Use the unit bridge to convert a value."
      },
      howTo: {
        length: "Look at the start and end points before choosing an answer.",
        mass: "Choose a weight and watch which way the balance moves.",
        capacity: "Read the liquid level against the container markings.",
        convert: "Study the relationship between the units, then enter the answer."
      },
      questions: {
        lengthMeasure: "How long is this object?", longer: "Which object is longer?", shorter: "Which object is shorter?",
        massBalance: "Which weight will balance the scale?", heavier: "Which is heavier?", lighter: "Which is lighter?",
        capacityRead: "What is the liquid volume?", more: "Which container holds more?", less: "Which container holds less?",
        convert: "Convert this value."
      },
      object: "Object", mysteryMass: "Mystery object", chooseWeight: "Choose a weight", container: "Container", blocks: "blocks", cups: "cups", units: "units",
      objectA: "Object A", objectB: "Object B", containerA: "Container A", containerB: "Container B",
      ready: "Observe the measuring tool, then choose an answer.", readyConvert: "Enter the matching value.",
      chooseFirst: "Choose an answer first.", enterFirst: "Enter an answer first.", correct: "Correct!",
      wrong: "Not yet. Look at the markings and the unit again.",
      wrongBalanceLow: "Too light. The balance still tips towards the object.",
      wrongBalanceHigh: "Too heavy. The balance tips towards the weight.",
      equivalence: "Unit relationship", equals: "equals", teacherIntro: "Enter values for the current activity.",
      invalid: "Enter a valid value from 0.01 to 10,000,000.", unequal: "Values A and B must be different.",
      differentUnits: "Choose two different units from the same category.",
      steps: ["Observe the tool", "Choose an answer", "Check and understand"],
      convertSteps: ["Identify the units", "Use the unit bridge", "Enter the answer"]
    }
  };

  const modeActivities = {
    length: ["measure", "compare"], mass: ["balance", "compare"], capacity: ["read", "compare"]
  };

  const unitGroups = {
    length: ["mm", "cm", "m", "km"], mass: ["g", "kg"], capacity: ["mL", "L"]
  };

  const unitFactors = {
    mm: .001, cm: .01, m: 1, km: 1000,
    g: .001, kg: 1,
    mL: .001, L: 1
  };

  const state = {
    lang: "bm", sound: true, mode: "length", level: `d${configuredYear || 1}`, category: "length",
    activities: { length: "measure", mass: "balance", capacity: "read" },
    question: null, selected: null, wrongSelection: null, solved: false, custom: false
  };

  let audioContext = null;

  const modeTabs = document.getElementById("modeTabs");
  const levelSelect = document.getElementById("levelSelect");
  const levelField = document.querySelector('label[for="levelSelect"]');
  const appSubtitle = document.querySelector('[data-i18n="appSubtitle"]');
  const activityField = document.getElementById("activityField");
  const activitySelect = document.getElementById("activitySelect");
  const categoryField = document.getElementById("categoryField");
  const categorySelect = document.getElementById("categorySelect");
  const soundToggle = document.getElementById("soundToggle");
  const modeTitle = document.getElementById("modeTitle");
  const howToText = document.getElementById("howToText");
  const promptText = document.getElementById("promptText");
  const levelBadge = document.getElementById("levelBadge");
  const challengeDisplay = document.getElementById("challengeDisplay");
  const conceptStage = document.getElementById("conceptStage");
  const answerZone = document.getElementById("answerZone");
  const feedback = document.getElementById("feedback");
  const resetBtn = document.getElementById("resetBtn");
  const checkBtn = document.getElementById("checkBtn");
  const newQuestionBtn = document.getElementById("newQuestionBtn");
  const celebrationLayer = document.getElementById("celebrationLayer");
  const stepTexts = [document.getElementById("stepOne"), document.getElementById("stepTwo"), document.getElementById("stepThree")];
  const teacherModal = document.getElementById("teacherModal");
  const teacherBtn = document.getElementById("teacherBtn");
  const teacherCloseBtn = document.getElementById("teacherCloseBtn");
  const teacherCancelBtn = document.getElementById("teacherCancelBtn");
  const teacherUseBtn = document.getElementById("teacherUseBtn");
  const teacherIntro = document.getElementById("teacherIntro");
  const teacherFields = document.getElementById("teacherFields");
  const teacherError = document.getElementById("teacherError");

  function t() { return translations[state.lang]; }
  function activity() { return state.mode === "convert" ? "convert" : state.activities[state.mode]; }
  function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function randomItem(items) { return items[randomInt(0, items.length - 1)]; }
  function round(value, decimals = 3) { return Number(Number(value).toFixed(decimals)); }
  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function formatValue(value) {
    return Number(value).toLocaleString(state.lang === "zh" ? "zh-CN" : "en-MY", { maximumFractionDigits: 3 });
  }
  function displayUnit(unit) {
    if (unit === "blocks") return t().blocks;
    if (unit === "cups") return t().cups;
    if (unit === "units") return t().units;
    return unit;
  }
  function measurementText(value, unit) { return `${formatValue(value)} ${displayUnit(unit)}`; }

  function numericOptions(target, step, minimum = 0) {
    const candidates = new Set([round(target)]);
    const offsets = shuffle([-2, -1, 1, 2, 3, -3]);
    for (const offset of offsets) {
      const value = round(target + offset * step);
      if (value >= minimum) candidates.add(value);
      if (candidates.size === 4) break;
    }
    while (candidates.size < 4) candidates.add(round(target + candidates.size * step));
    return shuffle([...candidates]);
  }

  function generateQuestion() {
    if (state.mode === "convert" && state.level === "d1") {
      state.level = "d2";
      levelSelect.value = "d2";
    }
    let question;
    const currentActivity = activity();
    if (state.mode === "length") question = currentActivity === "measure" ? makeLengthMeasure() : makeCompareQuestion("length");
    else if (state.mode === "mass") question = currentActivity === "balance" ? makeMassBalance() : makeCompareQuestion("mass");
    else if (state.mode === "capacity") question = currentActivity === "read" ? makeCapacityRead() : makeCapacityCompare();
    else question = makeConversion();
    setQuestion(question, false);
  }

  function setQuestion(question, custom) {
    state.question = question;
    state.selected = null;
    state.wrongSelection = null;
    state.solved = false;
    state.custom = custom;
    celebrationLayer.replaceChildren();
    render();
  }

  function makeLengthMeasure(targetValue, targetUnit) {
    const year = Number(state.level.slice(1));
    let target;
    let unit;
    let max;
    let step;
    let divisions;
    let labelEvery;
    let visual = "ruler";
    if (targetValue != null) {
      target = Number(targetValue);
      unit = targetUnit;
      visual = unit === "blocks" ? "blocks" : "ruler";
      if (unit === "blocks") {
        max = target; step = 1; divisions = target; labelEvery = 1;
      } else if (unit === "mm") {
        max = 100; step = 1; divisions = 100; labelEvery = 10;
      } else {
        max = year >= 5 ? 10 : 10;
        step = year >= 5 ? .1 : 1;
        divisions = year >= 5 ? 100 : 10;
        labelEvery = year >= 5 ? 10 : 1;
      }
    } else if (year === 1) {
      target = randomInt(2, 8); unit = "blocks"; max = target; step = 1; divisions = target; labelEvery = 1; visual = "blocks";
    } else if (year === 2) {
      target = randomInt(2, 9); unit = "cm"; max = 10; step = 1; divisions = 10; labelEvery = 1;
    } else if (year === 3) {
      target = randomInt(2, 9); unit = "cm"; max = 10; step = 1; divisions = 10; labelEvery = 1;
    } else if (year === 4) {
      target = randomInt(15, 95); unit = "mm"; max = 100; step = 1; divisions = 100; labelEvery = 10;
    } else {
      target = randomInt(31, 95) / 10; unit = "cm"; max = 10; step = .1; divisions = 100; labelEvery = 10;
    }
    return {
      mode: "length", activity: "measure", visual, target, unit, max, divisions, labelEvery,
      answer: target, options: numericOptions(target, step, step)
    };
  }

  function makeMassBalance(targetValue, targetUnit) {
    const year = Number(state.level.slice(1));
    let target;
    let unit;
    let step;
    if (targetValue != null) {
      target = Number(targetValue); unit = targetUnit; step = decimalStep(target);
    } else if (year === 1) {
      target = randomInt(2, 8); unit = "units"; step = 1;
    } else if (year === 2) {
      unit = Math.random() < .5 ? "kg" : "g";
      target = unit === "kg" ? randomInt(1, 8) : randomInt(1, 9) * 100;
      step = unit === "kg" ? 1 : 100;
    } else if (year === 3) {
      unit = Math.random() < .5 ? "kg" : "g";
      target = unit === "kg" ? randomInt(1, 9) : randomInt(1, 9) * 100;
      step = unit === "kg" ? 1 : 100;
    } else if (year === 4) {
      unit = Math.random() < .55 ? "kg" : "g";
      target = unit === "kg" ? randomInt(10, 90) / 10 : randomInt(1, 9) * 100;
      step = unit === "kg" ? .1 : 100;
    } else if (year === 5) {
      unit = Math.random() < .6 ? "kg" : "g";
      target = unit === "kg" ? randomInt(100, 900) / 100 : randomInt(10, 90) * 10;
      step = unit === "kg" ? .01 : 10;
    } else {
      unit = Math.random() < .65 ? "kg" : "g";
      target = unit === "kg" ? randomInt(1000, 9000) / 1000 : randomInt(100, 900);
      step = unit === "kg" ? .001 : 1;
    }
    return { mode: "mass", activity: "balance", target, unit, answer: target, options: numericOptions(target, step, step) };
  }

  function makeCapacityRead(targetValue, targetUnit) {
    const year = Number(state.level.slice(1));
    let target;
    let unit;
    let max;
    let step;
    let visual = "jug";
    if (targetValue != null) {
      target = Number(targetValue); unit = targetUnit;
      visual = unit === "cups" ? "cups" : "jug";
      if (unit === "cups") {
        max = target; step = 1;
      } else if (unit === "mL") {
        if (year === 2) { max = 1000; step = 100; }
        else if (year <= 4) { max = year === 3 ? 4000 : 5000; step = 100; }
        else if (year === 5) { max = 3000; step = 50; }
        else { max = 2000; step = 125; }
      } else if (year === 2) {
        max = 10; step = 1;
      } else if (year <= 4) {
        max = 5; step = .1;
      } else if (year === 5) {
        max = 3; step = .05;
      } else {
        max = 2; step = .125;
      }
    } else if (year === 1) {
      target = randomInt(2, 8); unit = "cups"; max = target; step = 1; visual = "cups";
    } else if (year === 2) {
      unit = Math.random() < .5 ? "L" : "mL";
      target = unit === "L" ? randomInt(1, 9) : randomInt(1, 9) * 100;
      max = unit === "L" ? 10 : 1000; step = unit === "L" ? 1 : 100;
    } else if (year === 3) {
      target = randomInt(11, 39) * 100; unit = "mL"; max = 4000; step = 100;
    } else if (year === 4) {
      target = randomInt(11, 49) * 100; unit = "mL"; max = 5000; step = 100;
    } else if (year === 5) {
      target = randomItem([.3, .5, .7, .75, 1.25, 1.5, 1.75, 2.5, 2.75]); unit = "L"; max = 3; step = .1;
    } else {
      target = randomItem([.125, .25, .375, .5, .625, .75, 1.125, 1.25, 1.5, 1.75]); unit = "L"; max = 2; step = .125;
    }
    const divisions = visual === "cups" ? target
      : year === 2 ? 10
      : year === 3 ? (unit === "L" ? 50 : 40)
      : year === 4 ? 50
      : year === 5 ? 60
      : 16;
    return {
      mode: "capacity", activity: "read", visual, target: round(target), unit, max, divisions,
      majorEvery: year === 5 ? 20 : undefined,
      answer: round(target), options: numericOptions(target, step, step)
    };
  }

  function makeCapacityCompare(firstValue, secondValue, customUnit) {
    const year = Number(state.level.slice(1));
    if (firstValue != null && secondValue != null) {
      const base = makeCompareQuestion("capacity", firstValue, secondValue, customUnit);
      let max;
      let divisions;
      if (customUnit === "cups") {
        max = Math.max(Number(firstValue), Number(secondValue)); divisions = 1;
      } else if (customUnit === "mL") {
        if (year === 2) { max = 1000; divisions = 10; }
        else if (year === 3) { max = 4000; divisions = 40; }
        else if (year === 4) { max = 5000; divisions = 50; }
        else if (year === 5) { max = 3000; divisions = 60; }
        else { max = 2000; divisions = 16; }
      } else if (year === 2) {
        max = 10; divisions = 10;
      } else if (year <= 4) {
        max = 5; divisions = 50;
      } else if (year === 5) {
        max = 3; divisions = 60;
      } else {
        max = 2; divisions = 16;
      }
      return {
        ...base,
        visual: customUnit === "cups" ? "cups" : "jug",
        max,
        divisions
      };
    }

    let a;
    let b;
    let unit;
    let visual = "jug";
    let max;
    let divisions;
    let displayAValue;
    let displayAUnit;
    let displayBValue;
    let displayBUnit;

    if (year === 1) {
      a = randomInt(3, 8); b = randomInt(2, 7); unit = "cups"; visual = "cups"; max = Math.max(a, b); divisions = 1;
    } else if (year === 2) {
      a = randomInt(3, 9); b = randomInt(1, 7); unit = "L"; max = 10; divisions = 10;
    } else if (year === 3) {
      a = randomInt(11, 39) * 100; b = randomInt(10, 38) * 100; unit = "mL"; max = 4000; divisions = 40;
    } else if (year === 4) {
      a = randomInt(11, 49) * 100;
      b = Math.max(100, Math.min(4900, a + randomItem([-300, -200, -100, 100, 200, 300])));
      unit = "mL"; max = 5000; divisions = 50;
    } else {
      a = randomInt(year === 5 ? 8 : 10, year === 5 ? 36 : 76) * (year === 5 ? 50 : 25);
      b = Math.max(25, Math.min(1975, a + randomItem(year === 5 ? [-200, -150, -100, 100, 150, 200] : [-75, -50, -25, 25, 50, 75])));
      unit = "mL"; max = 2000; divisions = year === 5 ? 20 : 40;
      displayAUnit = Math.random() < .5 ? "L" : "mL";
      displayBUnit = displayAUnit === "L" ? "mL" : "L";
      displayAValue = displayAUnit === "L" ? round(a / 1000) : a;
      displayBValue = displayBUnit === "L" ? round(b / 1000) : b;
    }

    if (a === b) b = Math.max(1, b - (year >= 4 ? 50 : 1));
    const objective = randomItem(["more", "less"]);
    const answer = objective === "more" ? (a > b ? "A" : "B") : (a < b ? "A" : "B");
    return {
      mode: "capacity", activity: "compare", a, b, unit, visual, max, divisions,
      displayAValue, displayAUnit, displayBValue, displayBUnit,
      objective, answer, options: ["A", "B"]
    };
  }

  function makeCompareQuestion(mode, firstValue, secondValue, customUnit) {
    const year = Number(state.level.slice(1));
    let a = firstValue == null ? randomInt(3, 9) : Number(firstValue);
    let b = secondValue == null ? randomInt(2, 8) : Number(secondValue);
    let unit = customUnit;
    if (firstValue == null && mode === "length") {
      if (year === 1) unit = "blocks";
      else if (year <= 3) unit = "cm";
      else if (year === 4) {
        unit = "mm"; a = randomInt(20, 90); b = randomInt(10, 80);
      } else {
        unit = "cm"; a = randomInt(30, 90) / 10; b = randomInt(20, 80) / 10;
      }
    }
    if (firstValue == null && mode === "mass") {
      if (year === 1) unit = "units";
      else if (year <= 3) unit = "kg";
      else if (year === 4) {
        unit = "kg"; a = randomInt(20, 90) / 10; b = randomInt(10, 80) / 10;
      } else if (year === 5) {
        unit = "kg"; a = randomInt(200, 900) / 100; b = randomInt(100, 800) / 100;
      } else {
        unit = "kg"; a = randomInt(2000, 9000) / 1000; b = randomInt(1000, 8000) / 1000;
      }
    }
    if (a === b) {
      let bump = 1;
      if (mode === "length" && year >= 5) bump = .1;
      if (mode === "mass" && year === 4) bump = .1;
      if (mode === "mass" && year === 5) bump = .01;
      if (mode === "mass" && year >= 6) bump = .001;
      b = round(b + bump);
    }
    const objectiveOptions = mode === "length" ? ["longer", "shorter"] : mode === "mass" ? ["heavier", "lighter"] : ["more", "less"];
    const objective = randomItem(objectiveOptions);
    const seeksLarger = ["longer", "heavier", "more"].includes(objective);
    const answer = seeksLarger ? (a > b ? "A" : "B") : (a < b ? "A" : "B");
    if (!unit) {
      if (mode === "length") unit = year === 1 ? "blocks" : "cm";
      if (mode === "mass") unit = year === 1 ? "units" : "kg";
      if (mode === "capacity") unit = year === 1 ? "cups" : "L";
    }
    return { mode, activity: "compare", a, b, unit, objective, answer, options: ["A", "B"] };
  }

  function makeConversion(customValue, customFrom, customTo) {
    const category = state.category;
    let fromUnit;
    let toUnit;
    let value;
    if (customValue != null) {
      fromUnit = customFrom; toUnit = customTo; value = Number(customValue);
    } else {
      const year = Number(state.level.slice(1));
      let pairs;
      if (category === "length") pairs = year <= 3 ? [["m", "cm"]] : [["cm", "mm"], ["m", "cm"], ["km", "m"]];
      else if (category === "mass") pairs = [["kg", "g"]];
      else pairs = [["L", "mL"]];
      const [big, small] = randomItem(pairs);
      const reverse = year >= 3 && Math.random() < .5;
      fromUnit = reverse ? small : big;
      toUnit = reverse ? big : small;
      const factor = unitFactors[fromUnit] / unitFactors[toUnit];
      if (year >= 5 && reverse) {
        if (category === "length" && big === "cm") value = randomItem([25, 47, 84, 206, 365, 453, 908]);
        else if (category === "length" && big === "m") value = randomItem([19, 39, 75, 137, 580, 920]);
        else if (category === "length") value = randomItem([2043, 6005, 10300, 42195]);
        else if (category === "mass") value = randomItem([1800, 2750, 3070, 5800, 6900]);
        else value = randomItem([300, 500, 700, 750, 2750, 6025]);
      } else if (reverse) {
        const relation = Math.round(1 / factor);
        value = randomInt(1, 9) * relation;
      } else if (year >= 5) {
        let decimalValues;
        if (category === "length" && big === "cm") decimalValues = [3.1, 4.7, 8.4, 9.2, 20.6, 36.5];
        else if (category === "length" && big === "m") decimalValues = [.19, .39, .75, 1.25, 1.37, 5.8];
        else if (category === "length") decimalValues = [1.025, 2.043, 3.75, 5.002, 42.195];
        else if (category === "mass") decimalValues = [.25, 1.8, 2.75, 3.07, 5.8];
        else decimalValues = [.3, .5, .7, .75, 1.25, 2.75, 6.025];
        value = randomItem(decimalValues);
      } else value = randomInt(1, 9);
    }
    const answer = round(value * unitFactors[fromUnit] / unitFactors[toUnit], 6);
    return { mode: "convert", activity: "convert", category, value, fromUnit, toUnit, answer };
  }

  function stepNice(value) {
    const magnitude = 10 ** Math.floor(Math.log10(Math.max(value, 1)));
    return Math.ceil(value / magnitude) * magnitude;
  }
  function decimalStep(value) {
    if (Number.isInteger(value)) return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(value, 1))) - 1));
    return value < 1 ? .1 : .5;
  }

  function fixedYearName() {
    const year = Number(state.level.slice(1));
    if (state.lang === "zh") return `数学${["", "一", "二", "三", "四", "五", "六"][year]}年级`;
    if (state.lang === "en") return `Math Year ${year}`;
    return `Matematik Tahun ${year}`;
  }

  function fixedSubtitle() {
    const year = Number(state.level.slice(1));
    if (state.lang === "zh") return `配合 SK 与 SJK 数学${["", "一", "二", "三", "四", "五", "六"][year]}年级课本的操作工具。`;
    if (state.lang === "en") return `Hands-on Math Year ${year} tools for SK and SJK.`;
    return `Alat manipulatif Matematik Tahun ${year} untuk SK dan SJK.`;
  }

  function applyTranslations() {
    document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : state.lang;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (typeof t()[key] === "string") element.textContent = t()[key];
    });
    soundToggle.querySelector("span:last-child").textContent = state.sound ? t().soundOn : t().soundOff;
    modeTitle.textContent = t()[`mode${capitalize(state.mode)}`];
    promptText.textContent = t().prompts[state.mode];
    howToText.textContent = t().howTo[state.mode];
    teacherIntro.textContent = t().teacherIntro;
    levelSelect.value = state.level;
    levelField.hidden = Boolean(configuredYear);
    levelBadge.textContent = configuredYear ? fixedYearName() : state.level.toUpperCase();
    if (configuredYear) {
      appSubtitle.textContent = fixedSubtitle();
      document.title = `${t().appTitle} · ${fixedYearName()}`;
    }
    const d1Option = levelSelect.querySelector('option[value="d1"]');
    if (d1Option) d1Option.disabled = state.mode === "convert";
    const steps = state.mode === "convert" ? t().convertSteps : t().steps;
    stepTexts.forEach((element, index) => { element.textContent = steps[index]; });
    updateActivityOptions();
  }

  function capitalize(value) { return value.charAt(0).toUpperCase() + value.slice(1); }

  function updateActivityOptions() {
    activityField.hidden = state.mode === "convert";
    categoryField.hidden = state.mode !== "convert";
    categorySelect.value = state.category;
    if (state.mode === "convert") return;
    const selected = state.activities[state.mode];
    activitySelect.replaceChildren();
    modeActivities[state.mode].forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = t().activities[value];
      option.selected = value === selected;
      activitySelect.append(option);
    });
  }

  function render() {
    applyTranslations();
    renderChallenge();
    renderConcept();
    renderAnswerZone();
    setFeedback(state.mode === "convert" ? t().readyConvert : t().ready);
    updateCheckButton();
  }

  function questionText() {
    const q = state.question;
    if (q.mode === "length") return q.activity === "measure" ? t().questions.lengthMeasure : t().questions[q.objective];
    if (q.mode === "mass") return q.activity === "balance" ? t().questions.massBalance : t().questions[q.objective];
    if (q.mode === "capacity") return q.activity === "read" ? t().questions.capacityRead : t().questions[q.objective];
    return t().questions.convert;
  }

  function renderChallenge() {
    challengeDisplay.replaceChildren();
    const wrapper = document.createElement("div");
    const label = document.createElement("div");
    const value = document.createElement("div");
    label.className = "challenge-label";
    value.className = "challenge-value";
    label.textContent = state.custom ? t().teacherMode : t().yourTask;
    value.textContent = questionText();
    wrapper.append(label, value);
    challengeDisplay.append(wrapper);
  }

  function renderConcept() {
    conceptStage.replaceChildren();
    const q = state.question;
    if (q.mode === "length") conceptStage.append(q.activity === "measure" ? renderLengthMeasure(q) : renderCompare(q));
    else if (q.mode === "mass") conceptStage.append(q.activity === "balance" ? renderBalance(q) : renderCompare(q));
    else if (q.mode === "capacity") conceptStage.append(q.activity === "read" ? renderCapacity(q) : renderCapacityCompare(q));
    else conceptStage.append(renderConversion(q));
  }

  function renderLengthMeasure(q) {
    if (q.visual === "blocks") {
      const lab = document.createElement("div");
      lab.className = "block-lab";
      const object = document.createElement("div");
      object.className = "block-object";
      const blocks = document.createElement("div");
      blocks.className = "measure-blocks";
      for (let i = 0; i < q.target; i += 1) {
        const block = document.createElement("span");
        block.className = "measure-block";
        blocks.append(block);
      }
      lab.append(object, blocks);
      return lab;
    }
    const lab = document.createElement("div");
    lab.className = "ruler-lab";
    const objectArea = document.createElement("div");
    objectArea.className = "object-to-measure";
    const object = document.createElement("div");
    object.className = "object-bar";
    object.style.width = `${Math.min(100, q.target / q.max * 100)}%`;
    objectArea.append(object);
    const ruler = document.createElement("div");
    ruler.className = "ruler";
    const divisions = q.divisions || 10;
    const labelEvery = q.labelEvery || Math.max(1, Math.round(divisions / 10));
    for (let i = 0; i <= divisions; i += 1) {
      const isMajor = i % labelEvery === 0;
      const isMiddle = !isMajor && labelEvery >= 10 && i % (labelEvery / 2) === 0;
      const tick = document.createElement("span");
      tick.className = `ruler-tick ${isMajor ? "major" : isMiddle ? "middle" : "minor"}`;
      tick.style.left = `${i / divisions * 100}%`;
      ruler.append(tick);
      if (isMajor) {
        const number = document.createElement("span");
        number.className = "ruler-number";
        number.style.left = `${i / divisions * 100}%`;
        number.textContent = formatValue(q.max * i / divisions);
        ruler.append(number);
      }
    }
    const unit = document.createElement("span");
    unit.className = "ruler-unit";
    unit.textContent = q.unit;
    ruler.append(unit);
    lab.append(objectArea, ruler);
    return lab;
  }

  function renderCompare(q) {
    const lab = document.createElement("div");
    lab.className = "compare-lab";
    const max = Math.max(q.a, q.b);
    [["A", q.a], ["B", q.b]].forEach(([letter, value]) => {
      const row = document.createElement("div");
      row.className = "compare-row";
      const badge = document.createElement("span");
      badge.className = "item-letter";
      badge.textContent = letter;
      const track = document.createElement("div");
      track.className = "compare-track";
      const bar = document.createElement("div");
      bar.className = "compare-bar";
      bar.style.width = `${28 + value / max * 68}%`;
      track.append(bar);
      const text = document.createElement("span");
      text.className = "compare-value";
      text.textContent = q.mode === "length" ? t()[`object${letter}`] : measurementText(value, q.unit);
      row.append(badge, track, text);
      lab.append(row);
    });
    return lab;
  }

  function renderBalance(q) {
    const lab = document.createElement("div");
    lab.className = "balance-lab";
    const scene = document.createElement("div");
    scene.className = "balance-scene";
    let tilt = 0;
    if (state.selected != null) tilt = Number(state.selected) < q.target ? -6 : Number(state.selected) > q.target ? 6 : 0;
    scene.style.setProperty("--tilt", `${tilt}deg`);
    const beam = element("div", "balance-beam");
    const pivot = element("div", "balance-pivot");
    const stand = element("div", "balance-stand");
    const base = element("div", "balance-base");
    const leftPan = element("div", "pan pan-left");
    const rightPan = element("div", "pan pan-right");
    const mystery = element("span", "pan-token unknown", "📦");
    mystery.setAttribute("aria-label", t().mysteryMass);
    const weight = element("span", `pan-token${state.selected == null ? " choose-weight" : ""}`, state.selected == null ? t().chooseWeight : measurementText(state.selected, q.unit));
    leftPan.append(mystery);
    rightPan.append(weight);
    scene.append(beam, pivot, stand, base, leftPan, rightPan);
    lab.append(scene);
    return lab;
  }

  function renderCapacity(q) {
    if (q.visual === "cups") {
      const row = element("div", "cup-row");
      for (let i = 0; i < q.target; i += 1) row.append(element("span", "cup-icon"));
      return row;
    }
    const lab = element("div", "jug-lab");
    lab.append(createJug(q.target, q.max, t().container, true, q.divisions, q.majorEvery));
    return lab;
  }

  function renderCapacityCompare(q) {
    if (q.visual === "cups") {
      const lab = element("div", "cup-compare-lab");
      [["A", q.a], ["B", q.b]].forEach(([letter, count]) => {
        const group = element("div", "cup-compare-group");
        group.append(element("span", "item-letter", letter));
        const row = element("div", "cup-row");
        for (let index = 0; index < count; index += 1) row.append(element("span", "cup-icon"));
        group.append(row);
        lab.append(group);
      });
      return lab;
    }
    const lab = element("div", "jug-lab");
    const max = q.max || Math.max(q.a, q.b) * 1.15;
    const captionA = q.displayAValue != null ? `A · ${measurementText(q.displayAValue, q.displayAUnit)}` : "A";
    const captionB = q.displayBValue != null ? `B · ${measurementText(q.displayBValue, q.displayBUnit)}` : "B";
    lab.append(
      createJug(q.a, max, captionA, false, q.divisions || 10, q.majorEvery),
      createJug(q.b, max, captionB, false, q.divisions || 10, q.majorEvery)
    );
    return lab;
  }

  function createJug(value, max, caption, showLabels = true, divisions = 10, requestedMajorEvery) {
    const wrap = element("div", "jug-wrap");
    const jug = element("div", "jug");
    const water = element("div", "water");
    water.style.setProperty("--fill", `${Math.max(0, Math.min(96, value / max * 96))}%`);
    jug.append(water);
    const majorEvery = requestedMajorEvery || (divisions % 4 === 0 ? divisions / 4 : divisions % 5 === 0 ? divisions / 5 : Math.max(1, Math.round(divisions / 4)));
    for (let i = 0; i <= divisions; i += 1) {
      const isMajor = i % majorEvery === 0;
      const isMiddle = !isMajor && majorEvery % 4 === 0 && i % (majorEvery / 4) === 0;
      const mark = element("span", `jug-mark ${isMajor ? "major" : isMiddle ? "middle" : "minor"}`);
      mark.style.bottom = `${i / divisions * 96}%`;
      jug.append(mark);
      if (showLabels && isMajor) {
        const label = element("span", "jug-mark-label", formatValue(max * i / divisions));
        label.style.bottom = `${i === 0 ? 3 : Math.min(92, i / divisions * 96)}%`;
        jug.append(label);
      }
    }
    const text = element("span", "jug-caption", caption);
    wrap.append(jug, text);
    return wrap;
  }

  function renderConversion(q) {
    const lab = element("div", "conversion-lab");
    const equation = element("div", "conversion-equation");
    const from = element("div", "unit-card");
    const to = element("div", "unit-card");
    from.innerHTML = `<div><strong>${formatValue(q.value)}</strong><span>${q.fromUnit}</span></div>`;
    to.innerHTML = `<div><strong>?</strong><span>${q.toUnit}</span></div>`;
    equation.append(from, element("span", "conversion-arrow", "→"), to);
    const relation = baseRelation(q.fromUnit, q.toUnit);
    const bridge = element("div", "unit-bridge", `${t().equivalence}: ${relation}`);
    lab.append(equation, bridge);
    return lab;
  }

  function baseRelation(first, second) {
    const firstFactor = unitFactors[first];
    const secondFactor = unitFactors[second];
    if (firstFactor > secondFactor) return `1 ${first} = ${formatValue(firstFactor / secondFactor)} ${second}`;
    return `1 ${second} = ${formatValue(secondFactor / firstFactor)} ${first}`;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderAnswerZone() {
    answerZone.replaceChildren();
    if (state.mode === "convert") {
      const wrap = element("div", "conversion-input-wrap");
      const input = document.createElement("input");
      input.id = "conversionAnswer";
      input.className = "conversion-input";
      input.type = "number";
      input.min = "0";
      input.step = "any";
      input.inputMode = "decimal";
      input.placeholder = "?";
      input.value = state.selected == null ? "" : String(state.selected);
      input.addEventListener("input", () => {
        state.selected = input.value;
        state.wrongSelection = null;
        setFeedback(t().readyConvert);
      });
      wrap.append(input, element("span", "answer-unit", state.question.toUnit));
      answerZone.append(wrap);
      return;
    }
    const grid = element("div", "choice-grid");
    state.question.options.forEach(option => {
      const button = element("button", "answer-choice");
      button.type = "button";
      button.classList.toggle("is-selected", state.selected === option);
      button.classList.toggle("is-wrong", state.wrongSelection === option);
      button.classList.toggle("is-correct", state.solved && option === state.question.answer);
      button.setAttribute("aria-pressed", String(state.selected === option));
      button.textContent = option === "A" || option === "B" ? option : measurementText(option, state.question.unit);
      button.addEventListener("click", () => selectAnswer(option));
      grid.append(button);
    });
    answerZone.append(grid);
  }

  function selectAnswer(value) {
    if (state.solved) return;
    state.selected = value;
    state.wrongSelection = null;
    playClick();
    renderConcept();
    renderAnswerZone();
    setFeedback(t().ready);
  }

  function checkAnswer() {
    if (state.solved) { generateQuestion(); return; }
    const q = state.question;
    if (state.mode === "convert") {
      if (state.selected == null || state.selected === "") { setFeedback(t().enterFirst, "error"); playError(); return; }
      const actual = Number(state.selected);
      if (!Number.isFinite(actual)) { setFeedback(t().enterFirst, "error"); playError(); return; }
      finishCheck(Math.abs(actual - q.answer) < .000001, actual);
      return;
    }
    if (state.selected == null) { setFeedback(t().chooseFirst, "error"); playError(); return; }
    finishCheck(state.selected === q.answer, state.selected);
  }

  function finishCheck(correct, actual) {
    const q = state.question;
    if (correct) {
      state.solved = true;
      state.wrongSelection = null;
      let explanation;
      if (q.mode === "convert") explanation = `${measurementText(q.value, q.fromUnit)} = ${measurementText(q.answer, q.toUnit)}`;
      else if (q.activity === "compare") {
        const choseA = q.answer === "A";
        const displayValue = choseA ? q.displayAValue : q.displayBValue;
        const displayMeasureUnit = choseA ? q.displayAUnit : q.displayBUnit;
        explanation = `${q.answer}: ${displayValue != null ? measurementText(displayValue, displayMeasureUnit) : measurementText(choseA ? q.a : q.b, q.unit)}`;
      }
      else explanation = measurementText(q.answer, q.unit);
      setFeedback(`<strong>${t().correct}</strong> <span class="explain-part">${explanation}</span>`, "success", true);
      playSuccess(); celebrate(); renderConcept(); renderAnswerZone(); updateCheckButton();
      return;
    }
    state.wrongSelection = actual;
    let message = t().wrong;
    if (q.mode === "mass" && q.activity === "balance") message = Number(actual) < q.target ? t().wrongBalanceLow : t().wrongBalanceHigh;
    setFeedback(message, "error");
    playError(); renderConcept(); renderAnswerZone();
  }

  function resetAnswer() {
    if (state.solved) { generateQuestion(); return; }
    state.selected = null;
    state.wrongSelection = null;
    playClick(); renderConcept(); renderAnswerZone();
    setFeedback(state.mode === "convert" ? t().readyConvert : t().ready);
  }

  function setFeedback(message, type = "", html = false) {
    feedback.className = `feedback${type ? ` ${type}` : ""}`;
    if (html) feedback.innerHTML = message; else feedback.textContent = message;
  }
  function updateCheckButton() {
    checkBtn.querySelector("span:last-child").textContent = state.solved ? t().next : t().check;
    checkBtn.querySelector("span:first-child").textContent = state.solved ? "→" : "✓";
  }

  function openTeacherModal() {
    teacherError.textContent = "";
    renderTeacherFields();
    teacherModal.hidden = false;
    document.body.style.overflow = "hidden";
    teacherFields.querySelector("input, select")?.focus();
    playClick();
  }
  function closeTeacherModal() {
    teacherModal.hidden = true;
    document.body.style.overflow = "";
    teacherError.textContent = "";
  }
  function addTeacherField(labelText, id, type, options) {
    const label = element("label", "field");
    const caption = element("span", "", labelText);
    let control;
    if (type === "select") {
      control = document.createElement("select");
      options.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = displayUnit(value);
        control.append(option);
      });
    } else {
      control = document.createElement("input");
      control.type = "number";
      control.min = ".01";
      control.max = "10000000";
      control.step = "any";
      control.inputMode = "decimal";
    }
    control.id = id;
    label.append(caption, control);
    teacherFields.append(label);
  }
  function renderTeacherFields() {
    teacherFields.replaceChildren();
    if (state.mode === "convert") {
      addTeacherField(t().value, "teacherValue", "number");
      const units = conversionUnits();
      addTeacherField(t().fromUnit, "teacherFromUnit", "select", units);
      addTeacherField(t().toUnit, "teacherToUnit", "select", units);
      const selects = teacherFields.querySelectorAll("select");
      if (selects[1]) selects[1].selectedIndex = 1;
      return;
    }
    const isCompare = activity() === "compare";
    if (isCompare) {
      addTeacherField(t().valueA, "teacherValueA", "number");
      addTeacherField(t().valueB, "teacherValueB", "number");
    } else addTeacherField(t().value, "teacherValue", "number");
    addTeacherField(t().unit, "teacherUnit", "select", teacherUnits());
  }
  function teacherUnits() {
    const year = Number(state.level.slice(1));
    if (state.mode === "length") {
      if (year === 1) return ["blocks"];
      if (year <= 3) return ["cm"];
      if (year === 4) return ["mm"];
      return ["cm", "mm"];
    }
    if (state.mode === "mass") return year === 1 ? ["units"] : ["g", "kg"];
    return year === 1 ? ["cups"] : ["mL", "L"];
  }
  function conversionUnits() {
    const year = Number(state.level.slice(1));
    if (state.category === "length") return year <= 3 ? ["cm", "m"] : ["mm", "cm", "m", "km"];
    return unitGroups[state.category];
  }
  function isOnStep(value, step) {
    return Math.abs(value / step - Math.round(value / step)) < .000001;
  }
  function teacherScaleMessage() {
    if (state.lang === "zh") return "这个数值不符合该年级课本使用的单位、范围或最小刻度。";
    if (state.lang === "en") return "This value does not match the unit, range, or smallest scale division used at this level.";
    return "Nilai ini tidak sepadan dengan unit, julat atau senggatan terkecil untuk tahap ini.";
  }
  function isTeacherMeasureAllowed(value, unit) {
    const year = Number(state.level.slice(1));
    if (state.mode === "length" && activity() === "measure") {
      if (year === 1) return unit === "blocks" && Number.isInteger(value) && value <= 10;
      if (year <= 3) return unit === "cm" && Number.isInteger(value) && value <= 10;
      if (year === 4) return unit === "mm" && Number.isInteger(value) && value <= 100;
      return (unit === "cm" && value <= 10 && isOnStep(value, .1))
        || (unit === "mm" && value <= 100 && Number.isInteger(value));
    }
    if (state.mode === "mass" && activity() === "balance") {
      if (year === 1) return unit === "units" && Number.isInteger(value) && value <= 10;
      const step = unit === "g" ? (year <= 4 ? 100 : year === 5 ? 10 : 1)
        : (year <= 3 ? 1 : year === 4 ? .1 : year === 5 ? .01 : .001);
      return isOnStep(value, step);
    }
    if (state.mode === "capacity" && activity() === "read") {
      if (year === 1) return unit === "cups" && Number.isInteger(value) && value <= 10;
      const limit = unit === "mL" ? (year === 2 ? 1000 : year === 3 ? 4000 : year === 4 ? 5000 : year === 5 ? 3000 : 2000)
        : (year === 2 ? 10 : year <= 4 ? 5 : year === 5 ? 3 : 2);
      const step = unit === "mL" ? (year <= 4 ? 100 : year === 5 ? 50 : 125)
        : (year === 2 ? 1 : year <= 4 ? .1 : year === 5 ? .05 : .125);
      return value <= limit && isOnStep(value, step);
    }
    return true;
  }
  function isTeacherCompareAllowed(value, unit) {
    const year = Number(state.level.slice(1));
    if (state.mode === "length") {
      if (year === 1) return unit === "blocks" && Number.isInteger(value) && value <= 10;
      if (year <= 3) return unit === "cm" && Number.isInteger(value) && value <= 10;
      if (year === 4) return unit === "mm" && Number.isInteger(value) && value <= 100;
      return (unit === "cm" && value <= 10 && isOnStep(value, .1))
        || (unit === "mm" && value <= 100 && Number.isInteger(value));
    }
    if (state.mode === "mass") {
      if (year === 1) return unit === "units" && Number.isInteger(value) && value <= 10;
      const step = unit === "g" ? (year <= 4 ? 100 : year === 5 ? 10 : 1)
        : (year <= 3 ? 1 : year === 4 ? .1 : year === 5 ? .01 : .001);
      return isOnStep(value, step);
    }
    if (year === 1) return unit === "cups" && Number.isInteger(value) && value <= 10;
    const limit = unit === "mL" ? (year === 2 ? 1000 : year === 3 ? 4000 : year === 4 ? 5000 : year === 5 ? 3000 : 2000)
      : (year === 2 ? 10 : year <= 4 ? 5 : year === 5 ? 3 : 2);
    const step = unit === "mL" ? (year <= 4 ? 100 : year === 5 ? 50 : 125)
      : (year === 2 ? 1 : year <= 4 ? .1 : year === 5 ? .05 : .125);
    return value <= limit && isOnStep(value, step);
  }
  function isConversionPairAllowed(fromUnit, toUnit) {
    if (fromUnit === toUnit) return false;
    if (state.category !== "length") return true;
    const pair = [fromUnit, toUnit].sort().join("-");
    const year = Number(state.level.slice(1));
    if (year <= 3) return pair === "cm-m";
    return ["cm-mm", "cm-m", "km-m"].includes(pair);
  }
  function isTeacherConversionValueAllowed(value, fromUnit, toUnit) {
    const year = Number(state.level.slice(1));
    const fromFactor = unitFactors[fromUnit];
    const toFactor = unitFactors[toUnit];
    if (fromFactor > toFactor) {
      const step = year >= 5 ? toFactor / fromFactor : 1;
      return isOnStep(value, step);
    }
    const relation = toFactor / fromFactor;
    return year >= 5 ? Number.isInteger(value) : isOnStep(value, relation);
  }
  function readValidValue(id) {
    const value = Number(document.getElementById(id)?.value);
    return Number.isFinite(value) && value >= .01 && value <= 10000000 ? value : null;
  }
  function useTeacherQuestion() {
    let question;
    if (state.mode === "convert") {
      const value = readValidValue("teacherValue");
      const fromUnit = document.getElementById("teacherFromUnit").value;
      const toUnit = document.getElementById("teacherToUnit").value;
      if (value == null) { teacherError.textContent = t().invalid; return; }
      if (!isConversionPairAllowed(fromUnit, toUnit)) { teacherError.textContent = t().differentUnits; return; }
      if (!isTeacherConversionValueAllowed(value, fromUnit, toUnit)) { teacherError.textContent = teacherScaleMessage(); return; }
      question = makeConversion(value, fromUnit, toUnit);
    } else if (activity() === "compare") {
      const a = readValidValue("teacherValueA");
      const b = readValidValue("teacherValueB");
      if (a == null || b == null) { teacherError.textContent = t().invalid; return; }
      if (a === b) { teacherError.textContent = t().unequal; return; }
      const unit = document.getElementById("teacherUnit").value;
      if (!isTeacherCompareAllowed(a, unit) || !isTeacherCompareAllowed(b, unit)) { teacherError.textContent = teacherScaleMessage(); return; }
      question = state.mode === "capacity"
        ? makeCapacityCompare(a, b, unit)
        : makeCompareQuestion(state.mode, a, b, unit);
    } else {
      const value = readValidValue("teacherValue");
      const unit = document.getElementById("teacherUnit").value;
      if (value == null) { teacherError.textContent = t().invalid; return; }
      if (!isTeacherMeasureAllowed(value, unit)) { teacherError.textContent = teacherScaleMessage(); return; }
      if (state.mode === "length") question = makeLengthMeasure(value, unit);
      else if (state.mode === "mass") question = makeMassBalance(value, unit);
      else question = makeCapacityRead(value, unit);
    }
    closeTeacherModal();
    setQuestion(question, true);
    playMove();
  }

  function celebrate() {
    const colors = ["#ffca4f", "#35a58c", "#3579b9", "#ef9837", "#d64f4f"];
    celebrationLayer.replaceChildren();
    for (let i = 0; i < 26; i += 1) {
      const piece = element("span", "confetti-piece");
      piece.style.setProperty("--confetti-color", colors[i % colors.length]);
      piece.style.setProperty("--confetti-x", `${randomInt(-350, 350)}px`);
      piece.style.setProperty("--confetti-y", `${randomInt(-230, 230)}px`);
      piece.style.setProperty("--confetti-r", `${randomInt(-540, 540)}deg`);
      piece.style.animationDelay = `${i * 9}ms`;
      celebrationLayer.append(piece);
    }
    window.setTimeout(() => celebrationLayer.replaceChildren(), 1000);
  }
  function ensureAudioContext() {
    if (!state.sound) return null;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioContext) audioContext = new AudioContextClass();
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  }
  function playTone(frequency, duration, delay = 0, type = "sine", volume = .045) {
    const context = ensureAudioContext();
    if (!context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + delay;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .012);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(gain); gain.connect(context.destination);
    oscillator.start(start); oscillator.stop(start + duration + .02);
  }
  function playClick() { playTone(420, .06, 0, "sine", .025); }
  function playMove() { playTone(360, .07, 0, "sine", .035); playTone(520, .08, .055, "sine", .03); }
  function playSuccess() { playTone(523, .14, 0, "sine", .05); playTone(659, .14, .1, "sine", .05); playTone(784, .2, .2, "sine", .055); }
  function playError() { playTone(210, .1, 0, "triangle", .035); playTone(165, .14, .09, "triangle", .03); }

  modeTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-mode]");
    if (!button || button.hidden || button.disabled || button.dataset.mode === state.mode) return;
    state.mode = button.dataset.mode;
    document.querySelectorAll(".mode-tab").forEach(tab => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
    playClick(); generateQuestion();
  });
  levelSelect.addEventListener("change", () => { if (configuredYear) return; state.level = levelSelect.value; playClick(); generateQuestion(); });
  activitySelect.addEventListener("change", () => { state.activities[state.mode] = activitySelect.value; playClick(); generateQuestion(); });
  categorySelect.addEventListener("change", () => { state.category = categorySelect.value; playClick(); generateQuestion(); });
  document.querySelectorAll(".language-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      document.querySelectorAll(".language-btn").forEach(languageButton => {
        const active = languageButton === button;
        languageButton.classList.toggle("active", active);
        languageButton.setAttribute("aria-pressed", String(active));
      });
      playClick(); render();
    });
  });
  soundToggle.addEventListener("click", () => {
    state.sound = !state.sound;
    soundToggle.setAttribute("aria-pressed", String(state.sound));
    soundToggle.querySelector("span:first-child").textContent = state.sound ? "🔊" : "🔇";
    soundToggle.querySelector("span:last-child").textContent = state.sound ? t().soundOn : t().soundOff;
    if (state.sound) playClick();
  });
  resetBtn.addEventListener("click", resetAnswer);
  checkBtn.addEventListener("click", checkAnswer);
  newQuestionBtn.addEventListener("click", () => { playClick(); generateQuestion(); });
  teacherBtn.addEventListener("click", openTeacherModal);
  teacherCloseBtn.addEventListener("click", closeTeacherModal);
  teacherCancelBtn.addEventListener("click", closeTeacherModal);
  teacherUseBtn.addEventListener("click", useTeacherQuestion);
  teacherModal.addEventListener("click", event => { if (event.target === teacherModal) closeTeacherModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !teacherModal.hidden) closeTeacherModal(); });

  if (configuredYear) {
    document.body.classList.add("fixed-year", `year-${configuredYear}`);
    document.querySelector('[data-mode="convert"]').hidden = configuredYear === 1;
  }
  generateQuestion();
})();
