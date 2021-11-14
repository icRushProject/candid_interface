export const idlFactory = ({ IDL }) => {
  const AdventureResult = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const ClaimResult = IDL.Variant({ 'Ok' : IDL.Nat64, 'Err' : IDL.Text });
  const NftData = IDL.Record({
    'xp' : IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
    'attr_strength' : IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
    'controllers' : IDL.Vec(IDL.Principal),
    'attr_agility' : IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
    'adventurers_log' : IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
    'level' : IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
    'mint_flag' : IDL.Bool,
    'tokens' : IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Principal)),
    'claim_index' : IDL.Nat64,
    'token_seeds' : IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
    'attr_intelligence' : IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
    'adventure_gap' : IDL.Nat64,
    'total_supply' : IDL.Nat64,
    'attribute_points' : IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
  });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'status_code' : IDL.Nat16,
  });
  return IDL.Service({
    'add_airdrops' : IDL.Func([IDL.Vec(IDL.Principal)], [IDL.Bool], []),
    'add_controller' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'add_points' : IDL.Func(
        [IDL.Nat64, IDL.Nat64, IDL.Nat64],
        [AdventureResult],
        [],
      ),
    'adventure' : IDL.Func([IDL.Nat64], [AdventureResult], []),
    'claim' : IDL.Func([], [ClaimResult], []),
    'get_airdrops' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Bool))],
        ['query'],
      ),
    'get_controllers' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'get_mint_flag' : IDL.Func([], [IDL.Bool], ['query']),
    'get_nft_data' : IDL.Func([], [NftData], ['query']),
    'get_token_properties' : IDL.Func(
        [IDL.Nat64],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'mint_off' : IDL.Func([], [IDL.Bool], []),
    'mint_on' : IDL.Func([], [IDL.Bool], []),
    'name' : IDL.Func([], [IDL.Text], ['query']),
    'owner_of' : IDL.Func([IDL.Nat64], [IDL.Opt(IDL.Principal)], ['query']),
    'querygap' : IDL.Func([IDL.Nat64], [IDL.Nat64], ['query']),
    'querylevel' : IDL.Func([IDL.Nat64], [IDL.Nat64], ['query']),
    'querypoint' : IDL.Func([IDL.Nat64], [IDL.Nat64], ['query']),
    'queryxp' : IDL.Func([IDL.Nat64], [IDL.Nat64], ['query']),
    'remaining' : IDL.Func([], [IDL.Nat64], []),
    'remove_controller' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'supply' : IDL.Func([], [IDL.Nat64], []),
    'symbol' : IDL.Func([], [IDL.Text], ['query']),
    'transfer_to' : IDL.Func([IDL.Principal, IDL.Nat64], [IDL.Bool], []),
    'user_tokens' : IDL.Func([IDL.Principal], [IDL.Vec(IDL.Nat64)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
