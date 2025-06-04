using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;

public class OfflineDice : MonoBehaviour
{
    [SerializeField] Sprite[] numberSprites;
    [SerializeField] SpriteRenderer numberSpriteHolder;
    [SerializeField] SpriteRenderer diceAnim;
    [SerializeField] int numberGot;

    Coroutine generateRandomNumber;
    public int outPieces;

    OfflinePathObjectParent pathParent;
    OfflinePlayerPiece[] currentPlayerPieces;
    OfflinePathPoint[] pathPointMoveOn;

    Coroutine MovePlayerPiece;

    OfflinePlayerPiece outPlayerPiece;

    public bool isAllowed = true;
    public bool isAIPlayer = false; // New field to identify AI player

    private void Awake()
    {
        pathParent = FindObjectOfType<OfflinePathObjectParent>();
    }

    private void OnMouseDown()
    {
        // Only allow human player to click
        if (!isAIPlayer)
        {
            generateRandomNumber = StartCoroutine(RollDice());
        }
    }

    public void mouseRoll()
    {
        generateRandomNumber = StartCoroutine(RollDice());
    }

    IEnumerator RollDice()
    {
        GameManagerOffline.gm.transferdice = false;
        yield return new WaitForEndOfFrame();
        if (GameManagerOffline.gm.canDiceRoll)
        {
            this.GetComponent<AudioSource>().Play();
            GameManagerOffline.gm.canDiceRoll = false;
            numberSpriteHolder.gameObject.SetActive(false);
            diceAnim.gameObject.SetActive(true);
            yield return new WaitForSeconds(0.7f);
            numberGot = Random.Range(0, 6);
            numberSpriteHolder.sprite = numberSprites[numberGot];
            numberGot += 1;

            GameManagerOffline.gm.numberOfStepsToMove = numberGot;
            GameManagerOffline.gm.dice = this;
            numberSpriteHolder.gameObject.SetActive(true);
            diceAnim.gameObject.SetActive(false);
            yield return new WaitForEndOfFrame();

            int nummberGot = GameManagerOffline.gm.numberOfStepsToMove;

            // Modified for 2 players (Red for user, Yellow for AI)
            if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[0])
            {
                outPieces = GameManagerOffline.gm.redOutPlayers;
            }
            else if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[2])
            {
                outPieces = GameManagerOffline.gm.yellowOutPlayers;
            }

            if (PlayerCanNotMove())
            {
                yield return new WaitForSeconds(0.3f);
                if (nummberGot != 6)
                {
                    GameManagerOffline.gm.transferdice = true;
                }
                else
                    GameManagerOffline.gm.selfDice = true;
            }
            else
            {
                if (outPieces == 0 && nummberGot != 6)
                {
                    yield return new WaitForSeconds(0.3f);
                    GameManagerOffline.gm.transferdice = true;
                }
                else
                {
                    if(numberGot == 6)
                    {
                        showSpinners();
                    }
                    else
                    {
                        showOnlyReadySpinners();
                    }

                    // AI Logic for Yellow player
                    if (isAIPlayer && GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[2])
                    {
                        yield return new WaitForSeconds(1f); // Add delay for AI thinking
                        if (numberGot == 6 && outPieces < 4)
                        {
                            MakePlayerReadyToMove(outPlayerToMove());
                        }
                        else if (outPieces > 0)
                        {
                            int playerPiecePosition = CheckoutPlayer();
                            if (playerPiecePosition >= 0)
                            {
                                GameManagerOffline.gm.canPlayerMove = false;
                                hideSpinners();
                                MovePlayerPiece = StartCoroutine(MovePlayer(playerPiecePosition));
                            }
                            else
                            {
                                yield return new WaitForSeconds(0.3f);
                                if (numberGot != 6)
                                {
                                    GameManagerOffline.gm.transferdice = true;
                                }
                                else
                                {
                                    GameManagerOffline.gm.selfDice = true;
                                }
                            }
                        }
                    }
                    // Human player logic
                    else if (!isAIPlayer)
                    {
                        if (outPieces == 0 && nummberGot == 6)
                        {
                            // Wait for player input
                        }
                        else if (outPieces == 1 && nummberGot != 6 && GameManagerOffline.gm.canPlayerMove)
                        {
                            int playerPiecePosition = CheckoutPlayer();
                            if (playerPiecePosition >= 0)
                            {
                                GameManagerOffline.gm.canPlayerMove = false;
                                hideSpinners();
                                MovePlayerPiece = StartCoroutine(MovePlayer(playerPiecePosition));
                            }
                            else
                            {
                                yield return new WaitForSeconds(0.3f);
                                if (nummberGot != 6)
                                {
                                    GameManagerOffline.gm.transferdice = true;
                                }
                                else
                                {
                                    GameManagerOffline.gm.selfDice = true;
                                }
                            }
                        }
                    }
                }
            }

            GameManagerOffline.gm.RollingDiceManager();

            if (generateRandomNumber != null)
            {
                StopCoroutine(RollDice());
            }
        }
    }

    void hideSpinners()
    {
        // Modified for 2 players
        if (this.name.Contains("Yellow"))
        {
            foreach (var op in GameObject.FindObjectsOfType<OfflineYellowPlayerPiece>())
            {
                op.transform.GetChild(1).gameObject.SetActive(false);
            }
        }
        if (this.name.Contains("Red"))
        {
            foreach (var op in GameObject.FindObjectsOfType<OfflineRedPlayerPiece>())
            {
                op.transform.GetChild(1).gameObject.SetActive(false);
            }
        }
    }

    void showOnlyReadySpinners()
    {
        // Modified for 2 players
        if (this.name.Contains("Yellow"))
        {
            foreach (var op in GameObject.FindObjectsOfType<OfflineYellowPlayerPiece>())
            {
                if (op.isReady)
                    op.transform.GetChild(1).gameObject.SetActive(true);
            }
        }
        if (this.name.Contains("Red"))
        {
            foreach (var op in GameObject.FindObjectsOfType<OfflineRedPlayerPiece>())
            {
                if (op.isReady)
                    op.transform.GetChild(1).gameObject.SetActive(true);
            }
        }
    }

    void showSpinners()
    {
        // Modified for 2 players
        if (this.name.Contains("Yellow"))
        {
            foreach (var op in GameObject.FindObjectsOfType<OfflineYellowPlayerPiece>())
            {
                op.transform.GetChild(1).gameObject.SetActive(true);
            }
        }
        if (this.name.Contains("Red"))
        {
            foreach (var op in GameObject.FindObjectsOfType<OfflineRedPlayerPiece>())
            {
                op.transform.GetChild(1).gameObject.SetActive(true);
            }
        }
    }

    int CheckoutPlayer()
    {
        // Modified for 2 players
        if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[0])
        {
            currentPlayerPieces = GameManagerOffline.gm.redPlayerPiece;
            pathPointMoveOn = pathParent.RedPathPoint;
        }
        else if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[2])
        {
            currentPlayerPieces = GameManagerOffline.gm.yelloPlayerPiece;
            pathPointMoveOn = pathParent.YellowPathPoint;
        }

        for(int i = 0; i < currentPlayerPieces.Length; i++)
        {
            if (currentPlayerPieces[i].isReady && isPathPointsAvailableToMove(GameManagerOffline.gm.numberOfStepsToMove, currentPlayerPieces[i].numberOfStepsAlreadyMove, pathPointMoveOn))
            {
                return i;
            }
        }
        return -1;
    }

    public bool PlayerCanNotMove()
    {
        if (outPieces > 0)
        {
            bool canNotMove = false;
            // Modified for 2 players
            if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[0])
            {
                currentPlayerPieces = GameManagerOffline.gm.redPlayerPiece;
                pathPointMoveOn = pathParent.RedPathPoint;
            }
            else if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[2])
            {
                currentPlayerPieces = GameManagerOffline.gm.yelloPlayerPiece;
                pathPointMoveOn = pathParent.YellowPathPoint;
            }

            for(int i = 0; i < currentPlayerPieces.Length; i++)
            {
                if (currentPlayerPieces[i].isReady)
                {
                    if (isPathPointsAvailableToMove(GameManagerOffline.gm.numberOfStepsToMove, currentPlayerPieces[i].numberOfStepsAlreadyMove, pathPointMoveOn))
                    {
                        return false;
                    }
                }
                else
                {
                    if (!canNotMove)
                    {
                        canNotMove = true;
                    }
                }
            }
            if (canNotMove)
            {
                return true;
            }
        }
        return false;
    }

    bool isPathPointsAvailableToMove(int numOfSteps, int numOfStepsAlredayMove, OfflinePathPoint[] pathPointToMove)
    {
        if (numOfSteps == 0)
        {
            return false;
        }
        int leftNumOfPath = pathPointToMove.Length - numOfStepsAlredayMove;
        if (leftNumOfPath >= numOfSteps)
            return true;
        else
            return false;
    }

    public void MakePlayerReadyToMove(int position)
    {
        // Modified for 2 players
        if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[0])
        {
            outPlayerPiece = GameManagerOffline.gm.redPlayerPiece[position];
            pathPointMoveOn = pathParent.RedPathPoint; 
            GameManagerOffline.gm.redOutPlayers += 1;
        }
        else if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[2])
        {
            outPlayerPiece = GameManagerOffline.gm.yelloPlayerPiece[position];
            pathPointMoveOn = pathParent.YellowPathPoint; 
            GameManagerOffline.gm.yellowOutPlayers += 1;
        }

        outPlayerPiece.isReady = true;
        outPlayerPiece.transform.position = pathPointMoveOn[0].transform.position;
        outPlayerPiece.numberOfStepsAlreadyMove = 1;

        outPlayerPiece.previousPathPoint = pathPointMoveOn[0];
        outPlayerPiece.CurrentPathPoint = pathPointMoveOn[0];
        outPlayerPiece.CurrentPathPoint.AddPlayerPiece(outPlayerPiece);
        GameManagerOffline.gm.AddPathPoint(outPlayerPiece.CurrentPathPoint);

        GameManagerOffline.gm.canDiceRoll = true;
        GameManagerOffline.gm.selfDice = true;
        GameManagerOffline.gm.transferdice = false;
        
        GameManagerOffline.gm.numberOfStepsToMove = 0;

        GameManagerOffline.gm.SelfRoll();
    }

    public IEnumerator MovePlayer(int position)
    {
        // Modified for 2 players
        if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[0])
        {
            outPlayerPiece = GameManagerOffline.gm.redPlayerPiece[position];
            pathPointMoveOn = pathParent.RedPathPoint;
        }
        else if (GameManagerOffline.gm.dice == GameManagerOffline.gm.ManageRollingDice[2])
        {
            outPlayerPiece = GameManagerOffline.gm.yelloPlayerPiece[position];
            pathPointMoveOn = pathParent.YellowPathPoint;
        }

        GameManagerOffline.gm.transferdice = false;
        yield return new WaitForSeconds(0.25f);
        int numberOfStepsToMove = GameManagerOffline.gm.numberOfStepsToMove;
        outPlayerPiece.CurrentPathPoint.RescaleAndRepositioningAllPlayer();
        
        for (int i = outPlayerPiece.numberOfStepsAlreadyMove; i < (outPlayerPiece.numberOfStepsAlreadyMove + numberOfStepsToMove); i++)
        {
            if (isPathPointsAvailableToMove(numberOfStepsToMove, outPlayerPiece.numberOfStepsAlreadyMove, pathPointMoveOn))
            {
                outPlayerPiece.transform.position = pathPointMoveOn[i].transform.position;
                outPlayerPiece.GetComponent<AudioSource>().Play();
                yield return new WaitForSeconds(0.35f);
            }
        }

        if (isPathPointsAvailableToMove(numberOfStepsToMove, outPlayerPiece.numberOfStepsAlreadyMove, pathPointMoveOn))
        {
            outPlayerPiece.numberOfStepsAlreadyMove += numberOfStepsToMove;

            GameManagerOffline.gm.RemovePathPoint(outPlayerPiece.previousPathPoint);
            outPlayerPiece.previousPathPoint.RemovePlayerPiece(outPlayerPiece);
            outPlayerPiece.CurrentPathPoint = pathPointMoveOn[outPlayerPiece.numberOfStepsAlreadyMove - 1];

            if (outPlayerPiece.CurrentPathPoint.AddPlayerPiece(outPlayerPiece))
            {
                if (outPlayerPiece.numberOfStepsAlreadyMove == 57)
                {
                    GameManagerOffline.gm.selfDice = true;
                }
                else
                {
                    if (GameManagerOffline.gm.numberOfStepsToMove != 6)
                    {
                        GameManagerOffline.gm.transferdice = true;
                    }
                    else
                    {
                        GameManagerOffline.gm.selfDice = true;
                    }
                }
            }
            else
            {
                GameManagerOffline.gm.selfDice = true;
            }

            GameManagerOffline.gm.AddPathPoint(outPlayerPiece.CurrentPathPoint);
            outPlayerPiece.previousPathPoint = outPlayerPiece.CurrentPathPoint;

            GameManagerOffline.gm.numberOfStepsToMove = 0;
        }

        GameManagerOffline.gm.canPlayerMove = true;

        GameManagerOffline.gm.RollingDiceManager();

        if (MovePlayerPiece != null)
        {
            StopCoroutine("MovePlayer");
        }
    }

    // Helper method for AI to choose which piece to move out
    int outPlayerToMove()
    {
        for(int i = 0; i < 4; i++)
        {
            if (!GameManagerOffline.gm.yelloPlayerPiece[i].isReady)
            {
                return i;
            }
        }
        return 0;
    }
}